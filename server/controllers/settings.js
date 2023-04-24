"use strict";

module.exports = {
    getSettings: async (ctx) => {
        try {
            ctx.body = await strapi
                .plugin("qbwa")
                .service("settings")
                .getSettings();
        } catch (err) {
            ctx.body = err;
            ctx.throw(500, err);
        }
    },
    setSettings: async (ctx) => {
        const { body } = ctx.request;
        try {
            await strapi
                .plugin("qbwa")
                .service("settings")
                .setSettings(body);
            ctx.body = await strapi
                .plugin("qbwa")
                .service("settings")
                .getSettings();
        } catch (err) {
            ctx.throw(500, err);
        }
    },
};
