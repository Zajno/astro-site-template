module.exports = {
  "env": {
      "browser": true,
      "es2021": true
  },
  "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:astro/recommended",
      "@zajno/eslint-config",
  ],
  "overrides": [
      {
          "files": ["*.astro"],
          "parser": "astro-eslint-parser",
          "parserOptions": {
              "project": "tsconfig.json",
              "sourceType": "module",
              "parser": "@typescript-eslint/parser",
              "extraFileExtensions": [".astro"],
          },
          "rules": {
            // override/add rules settings here, such as:
            // "astro/no-set-html-directive": "error"
          },
        },
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "project": ["tsconfig.json"],
      "ecmaVersion": "latest",
      "sourceType": "module",
  },
  "plugins": [
      "@typescript-eslint"
  ],
  "rules": {
  }
}