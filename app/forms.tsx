import { Form, useFetcher } from "remix";

export function Forms({ action }: { action: string }) {
  let fetcher = useFetcher();
  return (
    <div style={{ display: "flex", gap: 4 }}>
      <Form replace method="post" action={action}>
        <input type="hidden" name="hello" value="world" />
        <button type="submit">post (remix.Form)</button>
      </Form>

      <fetcher.Form replace method="post" action={action}>
        <input type="hidden" name="hello" value="world" />
        <button type="submit">fetcher.Form</button>
      </fetcher.Form>
      <button
        type="button"
        onClick={() => {
          let search = new URLSearchParams({ hello: "world" });
          fetcher.submit(search, { action, method: "post", replace: true });
        }}
      >
        fetcher.submit
      </button>
    </div>
  );
}
