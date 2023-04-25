module.exports = {
    type: "admin",
    routes: [
        {
            method: "GET",
            path: "/stylesheets",
            handler: "stylesheets.getStyleSheets",
            config: {
                policies: [],
                auth: false,
            },
        }
    ],
};
