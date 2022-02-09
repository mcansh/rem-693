import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  ShouldReloadFunction,
  useFetcher,
} from "remix";
import type { MetaFunction } from "remix";

export let meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export let unstable_shouldReload: ShouldReloadFunction = ({
  params,
  prevUrl,
  url,
  submission,
}) => {
  if (!submission) {
    console.log({ params, prevUrl, url });
    console.log("no submission");
  } else {
    console.log({
      params,
      prevUrl,
      url,
      submission: {
        ...submission,
        parsed: Object.fromEntries(submission.formData.entries()),
      },
    });
  }

  return false;
};

export default function App() {
  let fetcher = useFetcher();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <fetcher.Form method="get" action="?index">
          <input type="hidden" name="hello" value="world" />
          <button type="submit">get</button>
        </fetcher.Form>
        <fetcher.Form method="post" action="?index">
          <input type="hidden" name="hello" value="world" />
          <button type="submit">post</button>
        </fetcher.Form>
        <button
          type="button"
          onClick={() => {
            let search = new URLSearchParams({ hello: "world" });
            fetcher.submit(search, { action: "?index", method: "post" });
          }}
        >
          fetcher.submit
        </button>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
