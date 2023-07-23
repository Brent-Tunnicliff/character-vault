import SchemaBuilder from "@pothos/core";
import WithInputPlugin from '@pothos/plugin-with-input';

export const builder = new SchemaBuilder({
    plugins: [WithInputPlugin]
});

builder.queryType({});
builder.mutationType({});