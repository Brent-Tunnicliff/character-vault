import 'dotenv/config'; // Loads `.env` values.
import { SSTConfig } from "sst";
import { Api } from "./stacks";

export default {
  config(_input) {
    return {
      name: "character-vault",
      region: process.env.AWS_REGION,
    };
  },
  stacks(app) {
    app.stack(Api);
  }
} satisfies SSTConfig;
