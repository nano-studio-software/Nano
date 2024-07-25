module.exports = {
  env: {
    /* (i) An environment provides predefined global variables */
    browser: true, // Browser global variables
    node: true, // Node.js global variables and Node.js scoping
    es2021: true, // Adds all ECMAScript 2021 globals and automatically sets the ecmaVersion parser option to 12
  },
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    tsconfigRootDir: __dirname, // Required by `@typescript-eslint/recommended-requiring-type-checking`
    project: ["./tsconfig.json"], // Required by `@typescript-eslint/recommended-requiring-type-checking`
    ecmaVersion: 2021, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allow imports of code placed in ECMAScript modules
    ecmaFeatures: {
      /* (i) Which additional language features you'd like to use */
      jsx: true, // Enable JSX
    },
  },
  plugins: [
    /* (i) Place to define plugins, normally there is no need for this as "extends" will automatically import the plugin */
  ],
  extends: [
    "next/core-web-vitals",
    "eslint:recommended", // Rules recommended by ESLint (eslint)
    "plugin:@next/next/recommended", // Next.js rules (eslint-config-next)
    "plugin:react/recommended", // React rules (eslint-plugin-react)
    "plugin:react-hooks/recommended", // React Hooks rules (eslint-plugin-react-hooks)
    "plugin:jsx-a11y/recommended", // Accessibility rules (eslint-plugin-jsx-a11y)
    "plugin:import/errors", // Recommended errors for import (eslint-plugin-import)
    "plugin:import/warnings", // Recommended warnings for import (eslint-plugin-import)
    "plugin:import/typescript", // Typescript support for the import rules (eslint-plugin-import)
    "plugin:promise/recommended", // Enforce best practices for JavaScript promises (eslint-plugin-promise)
    "plugin:prettier/recommended", // This will display Prettier errors as ESLint errors. (!) Make sure this is always the last configuration in the extends array. (eslint-plugin-prettier & eslint-config-prettier)
  ],
  rules: {
    "react/react-in-jsx-scope": "off", // Disable the rule that requires React to be in scope as it is not needed when using Next.js
    "react-hooks/exhaustive-deps": "off",
  },
  /* (i) Apply TypeScript rules just to TypeScript files */
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      extends: [
        "plugin:@typescript-eslint/recommended", // TypeScript rules (@typescript-eslint/eslint-plugin)
        "plugin:@typescript-eslint/recommended-requiring-type-checking", // Linting with Type Information. More info: https://git.io/JEDmJ (@typescript-eslint/eslint-plugin)
      ],
    },
  ],
  settings: {
    react: {
      version: "detect", // Tells `eslint-plugin-react` to automatically detect the version of React to use
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"], //  TypeScript rules for custom imports "@something/"
    },
    "import/resolver": {
      typescript: {
        project: ["tsconfig.base.json"],
      },
      node: {
        project: ["tsconfig.base.json"],
      },
    },
  },
};
