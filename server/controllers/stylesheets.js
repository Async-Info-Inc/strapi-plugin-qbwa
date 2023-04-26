"use strict";

const { readStyleSheet, createStyleSheet, listStyleSheets } = require("../qbwa/utils");

module.exports = {
    getStyleSheets: async (ctx) => {
        // console.log(">> QBWA: getStyleSheets controller", ctx.request.params, ctx.request.query);
        try {
            const name = ctx.request.query.name || 'index';
            let body = readStyleSheet(name);
            if(name === 'index'){
                body = listStyleSheets();
            }
            ctx.body = body;
        } catch (err) {
            ctx.body = err;
            ctx.throw(500, err);
        }
    },
    setStyleSheet: async (ctx) => {
        // console.log(">> QBWA: setStyleSheet controller", name);
        const { body } = ctx.request;
        const name = body.name || 'index';
        const data = body.data || '';
        try {
            ctx.body = createStyleSheet(name, data);
        } catch (err) {
            ctx.body = err;
            ctx.throw(500, err);
        }
    }
};
