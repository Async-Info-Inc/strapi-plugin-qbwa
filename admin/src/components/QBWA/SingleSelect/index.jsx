import React from "react";
import Logger from "../../../../../qbwa/utils/Logger";
const SingleSelect = ({ label = "label: " }) => {
    Logger.log("SingleSelect", [
        `label: ${label}`
    ]);
    return (
        <div>
            <label>{label}</label>
            <select>
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
        </div>
    );
};

export default SingleSelect;