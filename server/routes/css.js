module.exports = {
    type: "admin",
    routes: [
        {
            method: "GET",
            path: "/css",
            handler: "plugin::qbwa.css.getFile",
            config: {
                policies: [],
                auth: false,
            },
        },
        {
            method: "POST",
            path: "/css",
            handler: "plugin::qbwa.css.setFile",
            config: {
                policies: [],
                auth: false,
            },
        },
    ],
};
