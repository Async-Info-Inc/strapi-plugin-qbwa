import { Editor } from '@monaco-editor/react';
import React, {useEffect, useState} from 'react';
import SingleSelect from '../SingleSelect';

const Body = () => {
    const [fileOptions, setFileOptions] = useState(['loading']);

    useEffect(() => {
        api.getAllFiles().then((data) => {
            console.log("Get All Files: ", data);
            setFileOptions(data.data);
        });
    }, []);

    const selectOptions = fileOptions.map((file) => {
        console.log("Creating file option: ", file);
        return {
            label: file,
            value: file,
        }
    });

    return (
        <div>
            <SingleSelect label="File" options={selectOptions} value={fileOptions[0].value} onChange={(value) => console.log(value)} /> 
            <Editor height="90vh" defaultLanguage="css" defaultValue=""/>
        </div>
    );
};

export default Body;