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
    return glob;
    `);
  const routes = Object.values(w().window.__remixManifest.routes).filter(
    (i) => i.path?.length
  );
  for (const route of routes) {
    const { path } = route;
    const routePath = `build/client/${path}`;
    execSync(`mkdir ${routePath}`);
    execSync(`ln build/client/index.html ${routePath}/index.html`, {
      cwd: root,
    });
  }
}
