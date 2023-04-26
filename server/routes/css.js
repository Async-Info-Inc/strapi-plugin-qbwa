module.exports = {
    type: "admin",
    routes: [
        {
            method: "GET",
            path: "/css",
            handler: "plugin::qbwa.css.getStyleSheet",
            config: {
                policies: [],
                auth: false,
            },
        },
        {
            method: "POST",
            path: "/css",
            handler: "plugin::qbwa.css.setStyleSheet",
            config: {
                policies: [],
                auth: false,
            },
        },
    ],
};
