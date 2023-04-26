"use strict";

const { readStyleSheet, createStyleSheet, listStyleSheets, deleteStyleSheet } = require("../../qbwa/be/css");

module.exports = {
    getStyleSheet: async (ctx) => {
        console.log(">> 🗑: getStyleSheet controller");
        console.group();
        console.log("name: ", name);
        console.log("data: ", data)
        console.log("action: ", action);
        console.groupEnd();
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
        const { body } = ctx.request;
        const name = body.name || 'index';
        const data = body.data || '';
        const action = body.action || '';
        console.log(">> 🗑: setStyleSheet controller");
        console.group();
        console.log("name: ", name);
        console.log("data: ", data)
        console.log("action: ", action);
        console.groupEnd();
        try {
            if(action === 'delete'){
                ctx.body = deleteStyleSheet(name);
            }else{
                ctx.body = createStyleSheet(name, data);
            }
        } catch (err) {
            ctx.body = err;
            ctx.throw(500, err);
        }
    }
};
