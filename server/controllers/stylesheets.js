"use strict";

const { readStyleSheet } = require("../qbwa/utils");

module.exports = {
    getStyleSheets: async (ctx) => {
        console.log(">> QBWA: getStyleSheets controller");
        try {
            ctx.body = readStyleSheet();
        } catch (err) {
            ctx.body = err;
            ctx.throw(500, err);
        }
    }
};
