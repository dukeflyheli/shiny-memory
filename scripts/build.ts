import { execSync } from "node:child_process";
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;

execSync("npx remix vite:build", {
  cwd: root,
});

/**
 * Modify `index.html` public paths.
 */
{
  const indexHTML = join(root, "build/client/index.html");
  const body = readFileSync(indexHTML, "utf-8");
  writeFileSync(
    indexHTML,
    body
      .replaceAll(
        /<\/head>/g,
        '<script>window.__REMIX_PUBLIC_PATH__ = "REPLACE_ME_MOUNT_PATH";</script></head>'
      )
      .replaceAll(/\/assets\//g, "REPLACE_ME_MOUNT_PATH/assets/")
      .replaceAll(
        /"url":"\/","basename":"\/"/g,
        `"url":"REPLACE_ME_MOUNT_PATH","basename":"REPLACE_ME_MOUNT_PATH"`
      )
      .replaceAll("REPLACE_ME_MOUNT_PATH", "")
  );
  console.log("Modified `index.html` public paths.");
}

/**
 * Modify `manifest-*.js` public paths.
 */
{
  const manifestJSFilename = readdirSync(
    join(root, "build/client/assets")
  ).find((v) => v.startsWith("manifest-") && v.endsWith(".js"));
  if (!manifestJSFilename) {
    throw new Error("No manifest-*.js file found");
  }

  const manifestJS = join(root, "build/client/assets", manifestJSFilename);
  const body = readFileSync(manifestJS, "utf-8");
  writeFileSync(
    manifestJS,
    body.replaceAll(/"\/assets\//g, 'window.__REMIX_PUBLIC_PATH__ + "/assets/')
  );
  console.log("Modified `manifest-*.js` public paths.");
}

// grab routes to create index pages at those paths for github-pages compat with SPA. https://github.com/rafgraph/spa-github-pages pages looks for index.html at path, if not found returns 404, so hard link index.html under folder paths from route paths
// alt way to get routes use @remix-run/dev routes --json to export.
{
  const assetsFolder = join(root, "build/client/assets");
  const files = readdirSync(assetsFolder);
  const manifestFileName = files.filter((i) => /^manifest/.test(i))[0];
  const manifestFile = join(root, "build/client/assets", manifestFileName);
  const manifestFileBody = readFileSync(manifestFile, "utf-8");
  const w = new Function(`
    var glob = {window:{}};
    with (glob) {
      ${manifestFileBody}
    }
    return Object.values(glob.window.__remixManifest.routes).map(i => i.path).filter(i => i);
    `) as () => string[];
  const routes = w();
  for (const route of routes) {
    const routePath = `build/client/${route}`;
    execSync(`mkdir ${routePath}`);
    execSync(`ln build/client/index.html ${routePath}/index.html`, {
      cwd: root,
    });
  }
}
