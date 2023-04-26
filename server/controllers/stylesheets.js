"use strict";

const { readStyleSheet, createStyleSheet } = require("../qbwa/utils");

module.exports = {
    getStyleSheets: async (ctx) => {
        console.log(">> QBWA: getStyleSheets controller", ctx.request.params, ctx.request.query);
        try {
            const name = ctx.request.query.name || 'index';
            ctx.body = readStyleSheet(name);
        } catch (err) {
            ctx.body = err;
            ctx.throw(500, err);
        }
    },
    setStyleSheet: async (ctx) => {
        const { body } = ctx.request;
        const name = body.name || 'index';
        console.log(">> QBWA: setStyleSheet controller", name);
        try {
            ctx.body = createStyleSheet(name);
        } catch (err) {
            ctx.body = err;
            ctx.throw(500, err);
        }
    }
};
