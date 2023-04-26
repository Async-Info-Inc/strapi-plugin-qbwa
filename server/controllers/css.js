"use strict";


module.exports = {
    getFile: async (ctx) => {
        const cssService = strapi.plugin("qbwa").service("css");
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
        const cssService = strapi.plugin("qbwa").service("css");
        const { body } = ctx.request;
        const name = body.name || null;
        const data = body.data || null;
        const action = body.action || '';
        console.log(">> 🗑: css:setFile controller");
        console.group();
        console.log("name: ", name);
        console.log("data: ", data)
        console.log("action: ", action);
        console.groupEnd();
        try {
            if(!name || !data){
                ctx.throw(500, 'Missing name or data');
            }
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
