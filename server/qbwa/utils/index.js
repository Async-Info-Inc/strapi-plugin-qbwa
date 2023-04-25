const fs = require("fs");

const setUpPublic = () => {
    const publicFolder = "./public";
    const qbwaPublic = `${publicFolder}/qbwa`;
    console.log(">> QBWA", fs.readdirSync(publicFolder));
    if(fs.existsSync(qbwaPublic)){
        fs.mkdirSync(qbwaPublic);
    }
};

module.exports = {
    setUpPublic
}
