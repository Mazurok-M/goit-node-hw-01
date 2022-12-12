module.exports = {
    env: {
        commonjs: true,
        es2021: true,
        node: true,
    },
    extends: ['google', 'prettierrc'],
    plugins: ['prettierrc'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        'prettier/prettier': ['error'],
        'require-jsdoc': ['off'],
    },
};
