import { Editor } from '@monaco-editor/react';
import React, {useEffect, useState} from 'react';
import {Button} from '@strapi/design-system';
import SingleSelect from '../SingleSelect';
import api from '../../../../../qbwa/fe/css';
import Trash from '@strapi/icons/Trash';
import { TextInput } from '@strapi/design-system';

const Body = () => {
    const [fileOptions, setFileOptions] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [editorModel, setEditorModel] = useState("");
    const [editorModelChange, setEditorModelChange] = useState("");
    
    const [newFileName, setNewFileName] = useState('');
    const [newFileNameError, setNewFileNameError] = useState(undefined);

    useEffect(() => {        
        const errorMsgs = {
            ExtensionError: 'You have added .css in the name. This is not needed since the extension will be auto added.',
            IndexError: 'You have added index in the name. This is not needed since the extension will be auto added.',
            EmptyError: 'You have not added a name. Please add a name.',
            AlreadyExists: 'This file already exists. Please choose a different name.'
        };
        if(newFileName !== ''){

        }
        if(newFileName.indexOf('.css') !== -1){
            setNewFileNameError(errorMsgs.ExtensionError);
        }

        if(newFileName === 'index'){
            setNewFileNameError(errorMsgs.IndexError);
        }

        if(newFileName === ''){
            setNewFileNameError(errorMsgs.EmptyError);
        }
        
        if(fileOptions.indexOf(newFileName) > -1){
            setNewFileNameError(errorMsgs.AlreadyExists);
        }

    }, [newFileName]);

    const onChange = (value) => {
        console.log("On Change: ", value);
        setSelectedFile(value);
    };

    const onRemoveClick = () => {
        api.deleteFile(selectedFile).then(resp => {
            setFileOptions(fileOptions => (fileOptions.filter(file => file !== selectedFile)));
        });
    };

    const onSaveClick = () => {
        if(editorModelChange !== null){
            api.writeFile(selectedFile, editorModelChange);
        }
    };

    const onEditorChange = (value) => {
        setEditorModelChange(value);
    };

    const onCreateClick = () => {
        if(newFileName !== ''){
            api.createFile(newFileName);
        }else{

        }
    };

    useEffect(() => {
        if(selectedFile !== null){
            api.getFile(selectedFile).then((data) => {
                console.log("Get File: ", data);
                setEditorModel(data);
            });
        }else{
            setEditorModel("");
        }
    }, [selectedFile]);

    useEffect(() => {
        if(fileOptions.length > 0){
            setSelectedFile(fileOptions[0]);
        }else{
            setSelectedFile(null);
        }
        
    }, [fileOptions]);

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
            <Button variant="success" onClick={onSaveClick}>Save File</Button>
            <TextInput placeholder="new file name" label="new CSS file" name="content" hint="Create a new CSS StyleSheet" error={newFileNameError} onChange={e => setNewFileName(e.target.value)} value={newFileName} />
            <Button variant="success" onClick={onCreateClick}>Create File</Button>
            <Editor height="90vh" defaultLanguage="css" defaultValue="" value={editorModel} onChange={onEditorChange}/>
        </div>
    );
};

export default Body;