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
        console.log(">> QBWA: setStyleSheet controller", ctx.request, body);
        try {
            const name = ctx.request.query.name || 'index';
            ctx.body = createStyleSheet(name);
        } catch (err) {
            ctx.body = err;
            ctx.throw(500, err);
        }
    }
};
