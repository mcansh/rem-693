import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type {
  ActionFunction,
  LinksFunction,
  MetaFunction,
  ShouldReloadFunction,
} from "remix";

import globalStyles from "./styles/global.css";
import { Forms } from "./forms";

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: globalStyles }];
};

export let action: ActionFunction = () => {
  return new Response("ROOT");
};

export let meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export let unstable_shouldReload: ShouldReloadFunction = ({ submission }) => {
  console.log({
    ...submission,
    parsed: submission
      ? Object.fromEntries(submission.formData.entries())
      : undefined,
  });

  return true;
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <div style={{ display: "flex", gap: 4 }}>
          <Link to="/">Index</Link>
          <Link to="/other">Other Page</Link>
        </div>

        <div>
          <h1>In Root Route, hitting Root action</h1>
          <Forms action="/" />
        </div>

        <div>
          <h1>In Root Route, hitting Index action</h1>
          <Forms action="/?index" />
        </div>

        <div>
          <h1>In Root Route, hitting Other action</h1>
          <Forms action="/other" />
        </div>

        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
