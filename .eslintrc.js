module.exports = {
    extends: [
      "plugin:astro/recommended",
    //   "@zajno/eslint-config",
    ],
    overrides: [
      {
        files: ["*.astro"],
        parser: "astro-eslint-parser",
        parserOptions: {
            project: "tsconfig.json",
            sourceType: "module",
            parser: "@typescript-eslint/parser",
            extraFileExtensions: [".astro"],
        },
        rules: {
          // override/add rules settings here, such as:
          // "astro/no-set-html-directive": "error"
        },
      },
    ],
}