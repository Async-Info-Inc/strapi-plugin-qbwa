module.exports = {
    type: "admin",
    routes: [
        {
            method: "GET",
            path: "/stylesheets",
            handler: "qbwa.getStylesheets",
            config: {
                policies: [],
                auth: false,
            },
        }
    ],
};
