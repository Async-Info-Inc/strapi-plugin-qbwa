const fs = require("fs");

const publicFolder = "./public";
const qbwaPublic = `${publicFolder}/qbwa`;
const stylesFolder = `${qbwaPublic}/styles`;
const requiredFolders = [qbwaPublic, stylesFolder];

const createFolders = (folders) => {
    folders.forEach(folder => {
        if(!fs.existsSync(folder)){
            console.log(">> QBWA", "Creating folder", folder, "...");
            fs.mkdirSync(folder);
        }else{
            console.log(">> QBWA", "Folder", folder, "already exists");
        }
    });
};

const setUpPublic = () => {
    createFolders(requiredFolders);
};

module.exports = {
    setUpPublic
}
