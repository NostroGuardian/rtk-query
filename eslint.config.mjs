import path from 'node:path';

import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import { configs, plugins, rules } from 'eslint-config-airbnb-extended';
import { rules as prettierConfigRules } from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

const gitignorePath = path.resolve('.', '.gitignore');

const jsConfig = [
  // ESLint Recommended Rules
  {
    name: 'js/config',
    ...js.configs.recommended,
  },
  // Stylistic Plugin
  plugins.stylistic,
  // Import X Plugin
  plugins.importX,
  // Airbnb Base Recommended Config
  ...configs.base.recommended,
  // Strict Import Config
  rules.base.importsStrict,
];

const reactConfig = [
  // React Plugin
  plugins.react,
  // React Hooks Plugin
  plugins.reactHooks,
  // React JSX A11y Plugin
  plugins.reactA11y,
  // Airbnb React Recommended Config
  ...configs.react.recommended,
  // Strict React Config
  rules.react.strict,
];

const typescriptConfig = [
  // TypeScript ESLint Plugin
  plugins.typescriptEslint,
  // Airbnb Base TypeScript Config
  ...configs.base.typescript,
  // Strict TypeScript Config
  rules.typescript.typescriptEslintStrict,
  // Airbnb React TypeScript Config
  ...configs.react.typescript,
];

const prettierConfig = [
  // Prettier Plugin
  {
    name: 'prettier/plugin/config',
    plugins: {
      prettier: prettierPlugin,
    },
  },
  // Prettier Config
  {
    name: 'prettier/config',
    rules: {
      ...prettierConfigRules,
      'prettier/prettier': 'error',
    },
  },
];

export default [
  // Ignore .gitignore files/folder in eslint
  includeIgnoreFile(gitignorePath),
  // Javascript Config
  ...jsConfig,
  // React Config
  ...reactConfig,
  // TypeScript Config
  ...typescriptConfig,
  // Prettier Config
  ...prettierConfig,
  // Custom rules override
  {
    name: 'custom/rules',
    rules: {
      'import-x/prefer-default-export': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      'react/jsx-sort-props': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-no-target-blank': 'off',
      'react/jsx-one-expression-per-line': 'off',
      'react/button-has-type': 'off',
      'react/require-default-props': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-noninteractive-element-interactions': 'off',
      'jsx-a11y/alt-text': 'off',
      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.ts', '.tsx'],
        },
      ],
      'no-plusplus': 'off',
      'no-param-reassign': 'off',
      radix: 'off',
      'no-nested-ternary': 'off',
      'max-len': [
        'error',
        {
          code: 120,
        },
      ],
      'react/jsx-fragments': ['error', 'syntax'],
    },
  },
];
