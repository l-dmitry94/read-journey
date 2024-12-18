module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
        'prettier',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', 'simple-import-sort'],
    rules: {
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'prettier/prettier': [
            'warn',
            {
                endOfLine: 'auto',
            },
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        'simple-import-sort/exports': 'warn',
        'simple-import-sort/imports': [
            'warn',
            {
                groups: [
                    // Packages `react` related packages come first.
                    ['^react', '^@?\\w'],
                    // Internal packages.
                    ['^(@|components)(/.*|$)'],
                    // Side effect imports.
                    ['^\\u0000'],
                    // Parent imports. Put `..` last.
                    ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                    // Other relative imports. Put same-folder imports and `.` last.
                    ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                    // Style imports.
                    ['^.+\\.?(css)$'],
                ],
            },
        ],
    },
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
    },
};
