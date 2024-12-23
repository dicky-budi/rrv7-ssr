import { createRequestHandler } from "@react-router/express";
import express from "express";
import "react-router";

declare module "react-router" {
  export interface AppLoadContext {
    VALUE_FROM_VERCEL: Promise<string>;
  }
}

const app = express();

app.use(
  createRequestHandler({
    // @ts-expect-error - virtual module provided by React Router at build time
    build: () => import("virtual:react-router/server-build"),
    // getLoadContext() {
    //   return {
    //     VALUE_FROM_VERCEL: "Pretty much like Astro Island isn't it?",
    //   };
    // },
  })
);

export default app;
