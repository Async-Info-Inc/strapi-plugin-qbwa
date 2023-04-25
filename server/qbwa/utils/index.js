const fs = require("fs");

const publicFolder = "./public";
const qbwaPublic = `${publicFolder}/qbwa`;
const stylesFolder = `${qbwaPublic}/styles`;
const styleIndex = `${stylesFolder}/index.css`;
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

const createStyleIndex = () => {
    if(!fs.existsSync(styleIndex)){
        console.log(">> QBWA", "Creating file", styleIndex, "...");
        fs.writeFileSync(styleIndex, "");
    }else{
        console.log(">> QBWA", "File", styleIndex, "already exists");
    }
};

const setUpPublic = () => {
    createFolders(requiredFolders);
    createStyleIndex();
};

module.exports = {
    setUpPublic
}
