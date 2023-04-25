module.exports = {
    type: "admin",
    routes: [
        {
            method: "GET",
            path: "/stylesheets",
            handler: "plugin::qbwa.stylesheets.getStyleSheets",
            config: {
                policies: [],
                auth: false,
            },
        }
    ],
};
