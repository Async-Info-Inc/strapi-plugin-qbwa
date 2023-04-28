import { Editor } from '@monaco-editor/react';
import React, {useEffect, useState} from 'react';
import {Button} from '@strapi/design-system';
import SingleSelect from '../SingleSelect';
import api from '../../../../../qbwa/fe/css';
import Trash from '@strapi/icons/Trash';
// import SingleSelect from '../SingleSelect';

const Body = () => {
    const [fileOptions, setFileOptions] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [editorModel, setEditorModel] = useState("");
    const onChange = (value) => {
        console.log("On Change: ", value);
        setSelectedFile(value);
    };

    const onRemoveClick = () => {
        api.deleteFile(selectedFile);
        setFileOptions(fileOptions => fileOptions.filter(file => file !== selectedFile));
        onChange(fileOptions[0]);
    };

    useEffect(() => {
        if(selectedFile !== null){
            api.getFile(selectedFile).then((data) => {
                console.log("Get File: ", data);
                setEditorModel(data);
            });
        }
    }, [selectedFile]);

    useEffect(() => {
        api.getAllFiles().then((data) => {
            console.log("Get All Files: ", data);
            setFileOptions(data);
            onChange(data[0]);
        });
    }, []);

    return (
        <div>
            <SingleSelect label="CSS File" options={fileOptions} onChange={onChange} /> 
            <Button variant="danger" startIcon={Trash} onClick={onRemoveClick}>Remove File</Button>
            <Editor height="90vh" defaultLanguage="css" defaultValue="" value={editorModel} />
        </div>
    );
};

export default Body;