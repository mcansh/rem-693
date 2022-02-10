import { ActionFunction } from "remix";
import { Forms } from "~/forms";

export let action: ActionFunction = () => {
  return new Response("OTHER");
};

export default function Index() {
  return (
    <>
      <div>
        <h1>In Other Route, hitting Root action</h1>
        <Forms action="/" />
      </div>

      <div>
        <h1>In Other Route, hitting Index action</h1>
        <Forms action="/?index" />
      </div>

      <div>
        <h1>In Other Route, hitting Other action</h1>
        <Forms action="" />
      </div>
    </>
  );
}
