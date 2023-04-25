import React from 'react';

import { request } from "@strapi/helper-plugin";

const Header = () => {
    const callCreate = async () => {
        console.log(">> QBWA: callCreate()");
    };
    const onCreateClick = () => {
        console.log(">> QBWA: onCreateClick()");
        callCreate();
    };
    return (<div>
        <h1>QBWA - Quickly Build Web Apps</h1>
        <toolbar>
            <input type="text" placeholder="stlesheet_name.css"/>
            <button onClick={onCreateClick}>Create Style Sheet</button>
        </toolbar>    
    </div>);
};
export default Header;