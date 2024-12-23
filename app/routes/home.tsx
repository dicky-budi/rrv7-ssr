import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  // return { message: context.VALUE_FROM_VERCEL };
  
  /// this 10 seconds timeout can only work because of this command:
  /// npx react-router reveal entry.server
  /// this command migrates react router entry.server files into our own codebase so we can modify it
  return { message: new Promise<string>((resolve) => setTimeout(() => {
      resolve("Hello World")
  }, 10000)) };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <Welcome message={loaderData.message} />;
}
