const fs = require("fs");

const publicFolder = "./public";
const qbwaPublic = `${publicFolder}/qbwa`;
const stylesFolder = `${qbwaPublic}/styles`;
const styleIndex = `${stylesFolder}/index.css`;
const requiredFolders = [qbwaPublic, stylesFolder];

const addToIndex = (name) => {
    const styleSheetImport = `@import url(./${name}.css);\n`;
    console.log(">> 🗑", " 🔨 ", "Adding to index ", name);
    fs.appendFileSync(styleIndex, styleSheetImport);
};

const removeFromIndex = (name) => {
    const indexData = readStyleSheet();
    const styleSheetImport = `@import url(./${name}.css);\n`;
    console.log(">> 🗑", " 🔨 ", "Removing from index ", name);
    indexData = indexData.replace(styleSheetImport, "");
    deleteStyleSheet('index');
    writeStyleSheet('index', indexData);
};

const listStyleSheets = () => {
    return fs.readdirSync(stylesFolder)
};

const deleteStyleSheet = (name) => {
    const styleSheet = `${stylesFolder}/${name}.css`;
    if(fs.existsSync(styleSheet)){
        console.log(">> 🗑", " 🔨 ", "Deleting file", styleSheet);
        fs.unlinkSync(styleSheet);
        removeFromIndex(name);
    }else{
        console.log(">> 🗑", " ✅ ", "File", styleSheet, "does not exist");
    }
};

const writeStyleSheet = (name, data) => {
    const styleSheet = `${stylesFolder}/${name}.css`;
    if(!fs.existsSync(styleSheet)){
        console.log(">> 🗑", " 🔨 ", "Creating file", styleSheet);
        addToIndex(name);
    }else{
        console.log(">> 🗑", " ✅ ", "File", styleSheet, " already exists ", " overwriting ", data);
    }
    fs.writeFileSync(styleSheet, data);
};

const readStyleSheet = (name = 'index') => {
    const styleSheet = `${stylesFolder}/${name}.css`;
    const file = fs.readFileSync(styleSheet, 'utf8');
    return file;
};

const createFolders = (folders) => {
    folders.forEach(folder => {
        if(!fs.existsSync(folder)){
            console.log(">> 🗑", " 🔨 ","Creating folder", folder, );
            fs.mkdirSync(folder);
        }else{
            console.log(">> 🗑", " ✅ ", "Folder", folder, "already exists");
        }
    });
};

const createStyleIndex = () => {
    if(!fs.existsSync(styleIndex)){
        console.log(">> 🗑", " 🔨 ", "Creating file", styleIndex);
        fs.writeFileSync(styleIndex, "");
    }else{
        console.log(">> 🗑", " ✅ ", "File", styleIndex, "already exists ");
    }
};

const setUpPublic = () => {
    createFolders(requiredFolders);
    createStyleIndex();
};

module.exports = {
    setUpPublic,
    readStyleSheet,
    writeStyleSheet,
    listStyleSheets,
    deleteStyleSheet
}
