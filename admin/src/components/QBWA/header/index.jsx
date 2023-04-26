import React from 'react';

import { request } from "@strapi/helper-plugin";
import api from "../../../api/styleSheets";

const Header = () => {
    const callCreate = async () => {
        const data = await api.createStyleSheet('foo', '.example2 { color: teal; }');
        console.log(">> QBWA: callCreate()", data);
    };
    const onCreateClick = () => {
        console.log(">> QBWA: onCreateClick()");
        callCreate();
    };
    const onGetClick = () => {
        console.log(">> QBWA: onGetClick()");
        api.getStyleSheets();
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