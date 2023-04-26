const fs = require("fs");

const publicFolder = "./public";
const qbwaPublic = `${publicFolder}/qbwa`;
const stylesFolder = `${qbwaPublic}/styles`;
const styleIndex = `${stylesFolder}/index.css`;
const requiredFolders = [qbwaPublic, stylesFolder];

const createStyleSheet = (name, data) => {
    const styleSheet = `${stylesFolder}/${name}.css`;
    if(!fs.existsSync(styleSheet)){
        console.log(">> QBWA", "🔨", "Creating file", styleSheet);
    }else{
        console.log(">> QBWA", "✅", "File", styleSheet, "already exists");
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
            console.log(">> QBWA", "🔨","Creating folder", folder, );
            fs.mkdirSync(folder);
        }else{
            console.log(">> QBWA", "✅", "Folder", folder, "already exists");
        }
    });
};

const createStyleIndex = () => {
    if(!fs.existsSync(styleIndex)){
        console.log(">> QBWA", "🔨", "Creating file", styleIndex);
        fs.writeFileSync(styleIndex, ".example { color: red; }");
    }else{
        console.log(">> QBWA", "✅", "File", styleIndex, "already exists ");
    }
};

const setUpPublic = () => {
    createFolders(requiredFolders);
    createStyleIndex();
};

module.exports = {
    setUpPublic,
    readStyleSheet,
    createStyleSheet
}
