import { StackContext, use } from "sst/constructs";
import { Auth } from "./auth";
import { AppSync } from "./app-sync";
import { Database } from "./database";

export function Api ({ app, stack }: StackContext) {
  const auth = use(Auth);
  const appSync = use(AppSync)
  const database = use(Database)

  // TODO: add main

  // auth.attachPermissionsForAuthUsers(stack, [api]);

  // const api = new Api(stack, "api", {
  //   defaults: {
  //     function: {
  //       bind: [bus],
  //     },
  //   },
  //   routes: {
  //     "GET /": "packages/functions/src/lambda.handler",
  //     "GET /todo": "packages/functions/src/todo.list",
  //     "POST /todo": "packages/functions/src/todo.create",
  //   },
  // });

  // bus.subscribe("todo.created", {
  //   handler: "packages/functions/src/events/todo-created.handler",
  // });

  // stack.addOutputs({
  //   ApiEndpoint: api.url,
  // });
}
