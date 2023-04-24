import { Editor } from "@monaco-editor/react";
import React, { memo } from "react";

const HomePage = () => {
    return <>
        <h1>QBWA - This is going to be a slog to edit</h1>
        <Editor height="90vh" defaultLanguage="javascript" defaultValue="// some comment" />;
    </>;
};

export default memo(HomePage);
