"use strict";

const { readStyleSheet, writeStyleSheet, listStyleSheets, deleteStyleSheet, setUpPublic } = require("../../qbwa/be/css");

module.exports = () => {
    return {
        init: async () => {
            console.log(">> 🗑: css:init service");
            setUpPublic();
        },
        readFile: async (name) => {
            console.log(">> 🗑: css:readFile service");
            console.group();
            console.log("name: ", name);
            console.groupEnd();
            return readStyleSheet(name);
        },
        writeFile: async (name, data) => {
            console.log(">> 🗑: css:writeFile service");
            console.group();
            console.log("name: ", name);
            console.log("data: ", data);
            console.groupEnd();
            return writeStyleSheet(name, data);
        },
        listFiles: async () => {
            console.log(">> 🗑: css:listFiles service");
            return listStyleSheets();
        },
        deleteFile: async (name) => {
            console.log(">> 🗑: css:deleteFile service");
            console.group();
            console.log("name: ", name);
            console.groupEnd();
            return deleteStyleSheet(name);
        },
    };
};
