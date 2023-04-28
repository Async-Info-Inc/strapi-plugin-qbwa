import { Editor } from '@monaco-editor/react';
import { Box } from '@strapi/design-system/Box';
import React from 'react';

const Body = () => {
    const [fileOptions, setFileOptions] = useState([]);

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
        <Box>
            <SingleSelect label="File" options={selectOptions} value={fileOptions[0]} onChange={(value) => console.log(value)} /> 
            <Editor height="90vh" defaultLanguage="css" defaultValue=""/>
        </Box>
    );
};

export default Body;