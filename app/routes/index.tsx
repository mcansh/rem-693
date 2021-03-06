import { ActionFunction } from "remix";
import { Forms } from "~/forms";

export let action: ActionFunction = () => {
  return new Response("INDEX");
};

export default function Index() {
  return (
    <>
      <div>
        <h1>In Index Route, hitting Root action</h1>
        <Forms action="/" />
      </div>

      <div>
        <h1>In Index Route, hitting Index action</h1>
        <Forms action="/?index" />
      </div>

      <div>
        <h1>In Index Route, hitting Other action</h1>
        <Forms action="/other" />
      </div>
    </>
  );
}
