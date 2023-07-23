import { AppSyncApi, StackContext } from "sst/constructs";

// TODO: add dataSources and resolvers
export function AppSync ({ stack }: StackContext) {
    const api = new AppSyncApi(stack, "GraphqlApi", {
        schema: "../../shared/schema.graphql",
        dataSources: {
          
        },
        resolvers: {
          
        },
      });

    return {
        api
    };
};
