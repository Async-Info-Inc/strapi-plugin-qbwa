module.exports = {
    type: "admin",
    routes: [
        {
            method: "GET",
            path: "/stylesheets",
            handler: "plugin::qbwa.styleSheets.getStyleSheets",
            config: {
                policies: [],
                auth: false,
            },
        },
        {
            method: "POST",
            path: "/stylesheets",
            handler: "plugin::qbwa.styleSheets.createStyleSheet",
            config: {
                policies: [],
                auth: false,
            },
        },
    ],
};
