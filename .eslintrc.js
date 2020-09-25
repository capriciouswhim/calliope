module.exports = {
    "env": {
        "browser": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "standard"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2020,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "settings": {
        "react": {
            "createClass": "createReactClass",  // Regex for Component Factory to use,
                                                // default to "createReactClass"
            "pragma": "React",                  // Pragma to use, default to "React"
//            "fragment": "React.Fragment",       // Fragment to use, default to "React.Fragment"
            "version": "detect",                // React version. "detect" automatically picks the version you have installed.
                                                // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
                                                // default to latest and warns if missing
                                                // It will default to "detect" in the future
            "flowVersion": "0.53"               // Flow version
        },
    },
    "rules": {
        "semi": ["error", "always"]
    }
};
