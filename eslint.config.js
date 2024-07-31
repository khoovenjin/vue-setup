import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import json from "eslint-plugin-json";
import prettier from "eslint-plugin-prettier";
import _import from "eslint-plugin-import";

export default [
  {
    languageOptions: {
      ecmaVersion: 2020,
      parser: tseslint.parser,
      globals: {
        ...globals.browser,
        ...globals.es2016,
        ...globals.node,
        ...globals.mocha,
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  ...json.configs["recommended"],
  ...prettier.configs["recommended"],
  {
    plugins: {
      import: _import,
    },
    rules: {
      "no-console": 0,
      "no-debugger": 0,
      "no-alert": 0,
      "vue/multi-word-component-names": 0,
      "import/order": [
        1,
        { alphabetize: { order: "asc", caseInsensitive: true } },
      ],
    },
  },
  {
    files: ["**/__tests__/**/*.spec.{j,t}s?{x}"],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
];
