"use strict";

const cssService = strapi.plugin("qbwa").service("css");

module.exports = {
    getFile: async (ctx) => {
        const name = ctx.request.query.name || 'index';
        console.log(">> 🗑: css:getFile controller");
        console.group();
        console.log("name: ", name);
        console.groupEnd();
        try {
            let body = await cssService.readFile(name);
            if(name === 'index'){
                body = await cssService.listFiles();
            }
            ctx.body = body;
        } catch (err) {
            ctx.body = err;
            ctx.throw(500, err);
        }
    },
    setFile: async (ctx) => {
        const { body } = ctx.request;
        const name = body.name || 'index';
        const data = body.data || '';
        const action = body.action || '';
        console.log(">> 🗑: css:setFile controller");
        console.group();
        console.log("name: ", name);
        console.log("data: ", data)
        console.log("action: ", action);
        console.groupEnd();
        try {
            if(action === 'delete'){
                ctx.body = await cssService.deleteFile(name);
            }else{
                ctx.body = await cssService.writeFile(name, data);
            }
        } catch (err) {
            ctx.body = err;
            ctx.throw(500, err);
        }
    }
};
