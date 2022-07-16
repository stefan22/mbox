module.exports = {
    extends: ["next", "airbnb", "airbnb/hooks", "prettier"],
    plugins: ["react", "@typescript-eslint", "prettier"],
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 13,
        sourceType: "module",
    },
    rules: {
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "react/jsx-props-no-spreading": "off",
        "import/prefer-default-export": "off",
        "no-param-reassign": "off",
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                ts: "never",
                tsx: "never",
                js: "never",
            },
        ],
        "consistent-return": "off",
        "no-underscore-dangle": "off",
        "arrow-body-style": "off",
        "prefer-arrow-callback": "off",
        "react/jsx-filename-extension": "off",
        "react/jsx-curly-brace-presence": "off",
        "react/function-component-definition": [
            "error",
            {
                namedComponents: "arrow-function",
                unnamedComponents: "arrow-function",
            },
        ],
        "prettier/prettier": "warn",
    },
}
