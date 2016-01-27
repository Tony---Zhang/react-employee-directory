module.exports = {
    "rules": {
        "indent": [2, "tab"],
        "quotes": [2, "single"],
        "linebreak-style": [2, "unix"],
        "semi": [2, "always"],
        "react/jsx-quotes": 0,
        "curly": 2,
        "camelcase": 2,
        "brace-style": [2, "1tbs"],
        "space-infix-ops": 2,
        "object-curly-spacing": [2, "never"],
        "array-bracket-spacing": [2, "never"],
        "computed-property-spacing": [2, "never"],
        "eqeqeq": 2
    },
    "parser": "babel-eslint",
    "extends": "airbnb",// eslint:recommended
    "ecmaFeatures": {
        "jsx": true,
        "experimentalObjectRestSpread": true
    },
    "plugins": [
        "react"
    ]
};
