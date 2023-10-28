import { printSchema } from 'graphql';
import type { CodegenConfig } from '@graphql-codegen/cli';
import { schema } from './src/graphql/schema';

const config: CodegenConfig = {
  schema: printSchema(schema),
  generates: {
    './../graphql/schema.graphql': {
      plugins: ['schema-ast'],
    },
  },
};

export default config;