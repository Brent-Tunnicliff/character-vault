import { StackContext, Table } from "sst/constructs";

export function Database({ stack }: StackContext) {
  const table = new Table(stack, "GameSystem", {
    fields: {
      pk: "string",
      sk: "string",
      gsi1pk: "string",
      gsi1sk: "string",
    },
    primaryIndex: { partitionKey: "pk", sortKey: "sk" },
    globalIndexes: {
      "GSI1": { partitionKey: "gsi1pk", sortKey: "gsi1sk" },
    }
  });

  return {
    table,
  };
}