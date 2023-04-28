import { Editor } from '@monaco-editor/react';
import React, {useEffect, useState, memo} from 'react';
import SingleSelect from '../SingleSelect';
// import SingleSelect from '../SingleSelect';

const Body = () => {
    const [fileOptions, setFileOptions] = useState([]);

    useEffect(() => {
        api.getAllFiles().then((data) => {
            console.log("Get All Files: ", data);
            setFileOptions(data.data);
        });
    }, []);

    return (
        <div>
            <SingleSelect label="File" options={fileOptions} /> 
            <Editor height="90vh" defaultLanguage="css" defaultValue=""/>
        </div>
    );
};

export default memo(Body);