import fs from 'fs';
export const setUpPublic = () => {
    const publicFolder = "/";
    const qbwaPublic = `${publicFolder}/qbwa`;
    if(fs.existsSync(qbwaPublic)){
        fs.mkdirSync(qbwaPublic);
    }
};
