import React from "react";
import Logger from "../../../../../qbwa/utils/Logger";
const SingleSelect = ({ label = "label: ", options = [] }) => {
    Logger.log("SingleSelect", [
        `label: ${label}`
        `options: ${Logger.arrayToString(options)}`
    ]);
    const optionEls = options.map((option) => {
        return <option value={option}>{option}</option>;
    });
    return (
        <div>
            <label>{label}</label>
            <select>
                {optionEls}
            </select>
        </div>
    );
};

export default SingleSelect;