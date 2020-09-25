module.exports = {
    "env": {
        "browser": true,
        "jest": true,
        "jest/globals": true
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
        "header",
        "jest",
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
        "header/header": ["error", "line", [
            " Calliope, a media contest management and submission website",
            " Copyright © 2010 Daric \"Jingoro\" Jackson",
            "",
            " This program is free software: you can redistribute it and/or modify",
            " it under the terms of the GNU Affero General Public License as published by",
            " the Free Software Foundation, either version 3 of the License, or",
            " (at your option) any later version.",
            "",
            " This program is distributed in the hope that it will be useful,",
            " but WITHOUT ANY WARRANTY; without even the implied warranty of",
            " MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the",
            " GNU Affero General Public License for more details.",
            "",
            " You should have received a copy of the GNU Affero General Public License",
            " along with this program.  If not, see <http://www.gnu.org/licenses/>.",
        ], 1],
        "semi": ["error", "always"]
    },
    "overrides": [
        {
            "files": [ "*.d.ts" ],
            "rules": {
                "header/header": "off"
            }
        }
    ]
};
