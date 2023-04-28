import { Editor } from '@monaco-editor/react';
import React, {useEffect, useState} from 'react';
import {Button} from '@strapi/design-system';
import SingleSelect from '../SingleSelect';
import api from '../../../../../qbwa/fe/css';
import Trash from '@strapi/icons/Trash';
// import SingleSelect from '../SingleSelect';

const Body = () => {
    const [fileOptions, setFileOptions] = useState([]);
    const [editorModel, setEditorModel] = useState("");
    const onChange = (value) => {
        console.log("On Change: ", value);
        api.getFile(value).then((data) => {
            console.log("Get File: ", data);
            setEditorModel(data);
        });
    };

    useEffect(() => {
        api.getAllFiles().then((data) => {
            console.log("Get All Files: ", data);
            setFileOptions(data);
        });
    }, []);

    return (
        <div>
            <SingleSelect label="CSS File" options={fileOptions} onChange={onChange} /> 
            <Button variant="danger" startIcon={Trash}>Remove File</Button>
            <Editor height="90vh" defaultLanguage="css" defaultValue="" value={editorModel} />
        </div>
    );
};

export default Body;