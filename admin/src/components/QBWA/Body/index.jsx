import { Editor } from '@monaco-editor/react';
import React, {useEffect, useState} from 'react';
import SingleSelect from '../SingleSelect';
import api from '../../../../../qbwa/fe/css';
// import SingleSelect from '../SingleSelect';

const Body = () => {
    const [fileOptions, setFileOptions] = useState([]);
    const [editorModel, setEditorModel] = useState("");
    const onChange = (value) => {
        api.getFile(value).then((data) => {
            console.log("Get File: ", data);
            setEditorModel(data.data);
        });
    };

    useEffect(() => {
        api.getAllFiles().then((data) => {
            console.log("Get All Files: ", data);
            setFileOptions(data.data);
        });
    }, []);

    return (
        <div>
            <SingleSelect label="File" options={fileOptions} /> 
            <Editor height="90vh" defaultLanguage="css" defaultValue={editorModel}/>
        </div>
    );
};

export default Body;