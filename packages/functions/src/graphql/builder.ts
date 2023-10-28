import SchemaBuilder from "@pothos/core";
import WithInputPlugin from '@pothos/plugin-with-input';
import { Field } from "./types/field";
import { Input } from "./types/input";

export const builder = new SchemaBuilder({
    plugins: [WithInputPlugin]
});

Field.register(builder);
Input.register(builder);

builder.queryType({});
builder.mutationType({});