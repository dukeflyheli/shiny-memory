import type {MetaFunction} from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [{title: 'New Remix SPA'}, {name: 'description', content: 'Welcome to Remix (SPA Mode)!'}];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            href={window.__REMIX_PUBLIC_PATH__ + '/templates'}
          >
            templates
          </a>
        </li>
      </ul>
    </div>
  );
}
