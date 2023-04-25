import { Editor } from '@monaco-editor/react';
import React from 'react';

import indexFile from './index.css';

const Body = () => {
    return (<div>
        <h2>The editor body:</h2>
        <Editor height="90vh" defaultLanguage="css" defaultValue={indexFile}/>
    </div>);
};

export default Body;