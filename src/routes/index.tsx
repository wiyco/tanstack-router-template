import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
  head: () => ({
    meta: [
      {
        name: "title",
        content: "New TanStack Router App",
      },
      {
        name: "description",
        content: "Welcome to TanStack Router!",
      },
    ],
  }),
});

function App() {
  return (
    <div className="p-4 font-sans">
      <h1 className="text-3xl">Welcome to TanStack Router</h1>
      <ul className="mt-4 list-disc space-y-2 pl-6">
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://tanstack.com/router/latest/docs/framework/react/quick-start"
            rel="noreferrer"
          >
            Getting Started
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://tanstack.com/router/latest/docs/framework/react/routing/routing-concepts"
            rel="noreferrer"
          >
            Learn TanStack Router
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://tanstack.com/"
            rel="noreferrer"
          >
            TanStack Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
