import { createConfigForNuxt } from "@nuxt/eslint-config";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default createConfigForNuxt({
  features: {
    import: {
      package: "eslint-plugin-import-lite",
    },
  },
}).append(eslintConfigPrettier, eslintPluginPrettierRecommended);
