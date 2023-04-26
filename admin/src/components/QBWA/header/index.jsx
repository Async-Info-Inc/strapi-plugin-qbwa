import React from 'react';
import api from "../../../../../qbwa/fe/css";

const Header = () => {
    const callCreate = async () => {
        const data = await api.createFile('foo', '.example2 { color: teal; }');
        console.log(">> QBWA: callCreate()", data);
    };
    const onCreateClick = () => {
        console.log(">> QBWA: onCreateClick()");
        callCreate();
    };
    const onGetClick = () => {
        console.log(">> QBWA: onGetClick()");
        api.getFile();
    }

    return (<div>
        <h1>QBWA - Quickly Build Web Apps</h1>
        <toolbar>
            <input type="text" placeholder="stlesheet_name.css"/>
            <button onClick={onCreateClick}>Create Style Sheet</button>
            <button onClick={onGetClick}>Get Style Sheets</button>
        </toolbar>    
    </div>);
};
export default Header;