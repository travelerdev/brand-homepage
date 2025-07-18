import pluginNext from "@next/eslint-plugin-next";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

const config = tseslint.config(
  ...tseslint.configs.recommended,
  {
    ignores: [
      ".lintstagedrc.js",
      "*.config.js",
      "out/",
      "src/types/API.ts",
      "scripts/",
      "node_modules/*",
      "public/*",
      ".turbo/*",
      ".next/*",
      "**/generated/**/*",
      "package.json"
    ]
  },
  {
    plugins: {
      react: reactPlugin,
      "react-hooks": hooksPlugin,
      "@next/next": pluginNext
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  },
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },

    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...hooksPlugin.configs.recommended.rules,
      ...pluginNext.configs.recommended.rules,
      "react/react-in-jsx-scope": "off"
    }
  },
  eslintPluginPrettierRecommended
);

export default config;
