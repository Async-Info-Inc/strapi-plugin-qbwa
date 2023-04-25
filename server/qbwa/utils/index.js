const fs = require("fs");

const setUpPublic = () => {
    const publicFolder = "/";
    const qbwaPublic = `${publicFolder}/qbwa`;
    if(fs.existsSync(qbwaPublic)){
        fs.mkdirSync(qbwaPublic);
    }
};

module.exports = {
    setUpPublic
}
