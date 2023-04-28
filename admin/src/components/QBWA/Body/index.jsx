import { Editor } from '@monaco-editor/react';
import React, {useEffect, useState, memo} from 'react';
// import SingleSelect from '../SingleSelect';

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
            {/* <SingleSelect label="File" options={selectOptions} value={selectOptions[0].value} onChange={(value) => console.log(value)} />  */}
            <select onChange={handleChange}>
            {selectOptions.map((option) => {
                    console.log(`Making option for: ${JSON.stringify(option)}`);
                    return (<option>
                        {option}
                    </option>);
                })}
            </select>
            <Editor height="90vh" defaultLanguage="css" defaultValue=""/>
        </div>
    );
};

export default memo(Body);