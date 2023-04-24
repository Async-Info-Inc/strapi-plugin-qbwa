"use strict";

module.exports = async ({ strapi }) => {
    const actions = [
        {
            section: "plugins",
            displayName: "Access the plugin settings",
            uid: "settings.read",
            pluginName: "qbwa",
        },
        {
            section: "plugins",
            displayName: "Menu link to plugin settings",
            uid: "menu-link",
            pluginName: "qbwa",
        },
    ];
    await strapi.admin.services.permission.actionProvider.registerMany(actions);
};
