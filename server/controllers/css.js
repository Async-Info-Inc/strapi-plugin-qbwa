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
            let body = '';
            if(name === 'index'){
                body = await cssService.listFiles();
            }else{
                body = await cssService.readFile(name);
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
            if(!name){
                ctx.throw(500, 'Missing name');
            }
            if(action === 'delete'){
                ctx.body = await cssService.deleteFile(name);
            }else{
                if(!data){
                    ctx.body = await cssService.writeFile(name, data);
                }else{
                    ctx.throw(500, 'Missing data');
                }
                
            }
        } catch (err) {
            ctx.body = err;
            ctx.throw(500, err);
        }
    }
};
