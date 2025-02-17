"use strict";

module.exports = ({ strapi }) => {
    return {
        getConfig(key = "editor") {
            return strapi.plugin("qbwa").config(key) ?? {};
        },
    };
};
