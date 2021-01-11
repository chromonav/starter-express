import { useRouteData } from "@remix-run/react";
import type { Loader } from "@remix-run/data";

export let loader: Loader = async () => {
  return {
    message: "this is awesome 😎",
  };
};

export function meta() {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!",
  };
}

export default function Index() {
  let data = useRouteData();

  return (
    <div>
      <h2>Welcome sachin!</h2>
      <p>
        <a href="https://remix.run/dashboard/docs">Check out the docs</a> to get
        started.
      </p>
    </div>
  );
}
