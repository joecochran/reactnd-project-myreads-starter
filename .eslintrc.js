module.exports = {
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": "off",
        "jsx-a11y/anchor-is-valid": [ 
            "error",
            { 
                "components": [ "Link" ], 
                "specialLink": [ "to" ] 
            }
        ],
        "import/no-named-as-default": "off",
        "import/no-named-as-default-member": "off"
    }
};
