/* eslint-disable sort-keys */
module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:storybook/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:prettier/recommended',
    // 'prettier/@typescript-eslint',
    // 'prettier/react'
  ],
  overrides: [{
      files: [
        'src/**/*.ts',
        'src/**/*.tsx',
        'bin/*.js', 'lib/*.js'
      ],
      rules: {
        'sort-keys-fix/sort-keys-fix': 'warn'
      }
    }],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2020,
      sourceType: 'module',
    },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    // 'prettier',
    'sort-keys-fix',
  ],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      }
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',

    '@typescript-eslint/no-empty-interface': 'warn',
    // TypeScript
    '@typescript-eslint/no-explicit-any': 'warn',


    '@typescript-eslint/no-unused-vars': ['warn', {
      argsIgnorePattern: '^_',
    }],
    '@typescript-eslint/no-explicit-any': 'off',

    // Others
    'arrow-body-style': ['error', 'as-needed'],

    camelcase: 'error',
    // 'comma-dangle': 'off',
    // '@typescript-eslint/comma-dangle': ['error', {
    //   'arrays': 'always-multiline',
    //   'objects': 'always-multiline',
    //   'imports': 'always-multiline',
    //   'exports': 'always-multiline',
    //   'functions': 'always-multiline',
    // }],
    'consistent-return': 'warn',


    'default-case': 'warn',


    eqeqeq: 'error',



    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'src/**/*.test.js',
          'src/**/*.test.jsx',
          'src/**/*.test.ts',
          'src/**/*.test.tsx',
          'src/setupTests.js',
          'src/setupTests.ts',
          '**/setupTests.js',
          '**/setupTests.ts'
        ],
      }
    ],
    // Import Order
    // 'import/order': [
    //   'error',
    //   {
    //     groups: [
    //       ['builtin', 'external', 'internal']
    //     ],
    //     'newlines-between': 'always',
    //     alphabetize: {
    //       order: 'asc',
    //       caseInsensitive: true,
    //     },
    //   },
    // ],
    // indent: [
    //   1,
    //   2, {
    //     FunctionDeclaration: {
    //       body: 1,
    //       parameters: 'first',
    //     },
    //   }
    // ],
    'no-console': 'warn',
    'no-constant-condition': 'warn',
    'no-debugger': 'warn',
    'no-eval': 'warn',
    'no-invalid-regexp': 'warn',
    'no-multi-spaces': 'warn',
    'no-return-assign': 'warn',
    'no-trailing-spaces': 'warn',
    'no-undef': 'warn',
    // 'no-unused-vars': 'warn',
    'object-curly-spacing': ['error', 'always'],
    'prefer-arrow-callback': 'error',

    quotes: ['error', 'single'],

    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'warn',


    'react/destructuring-assignment': ['warn', 'always'],


    'react/display-name': 'error',
    'react/jsx-boolean-value': ['error', 'never'],

    'react/jsx-curly-spacing': ['error', {
      children: true,
      when: 'never',
    }],

    'react/jsx-fragments': 'error',


    'react/jsx-no-undef': 'error',
    'react/jsx-props-no-spreading': 'off',
    // Prettier
    // 'prettier/prettier': 'error',
    // React
    'react/jsx-uses-react': 'off',
    'react/jsx-uses-vars': 'error',
    'react/no-unescaped-entities': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'error',

    semi: ['error', 'always'],
    'sort-imports': [
      'error',
      {
        allowSeparatedGroups: true, // Allows separating import groups with blank lines
        ignoreCase: false, // Case-sensitive sorting
        ignoreDeclarationSort: true, // Ignores sorting within the same import declaration
      }
    ],
    'sort-keys-fix/sort-keys-fix': 'warn',
    strict: ['warn', 'global'],

    // 'react/require-default-props': 'error',

    'template-curly-spacing': 'warn',
    'valid-typeof': 'warn',

    // '@typescript-eslint/explicit-function-return-type': ['error', {
    //   allowExpressions: true
    // }]
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};