import React from "react";
import Logger from "../../../../../qbwa/utils/Logger";
const SingleSelect = ({ label = "label: ", options = [], value, onChange }) => {
    Logger.log("SingleSelect", [
        `label: ${label}`,
        `options: ${Logger.arrayToString(options)}`
    ]);
    const optionEls = options.map((option) => {
        return <option value={option} selected={option === value ? true : false}>{option}</option>;
    });
    const onSelectChange = (event) => {
        const value = event.target.value;
        Logger.log("SingleSelect Default Change Handler", [
            `value change: ${value}`
        ]);
        if(onChange){
            onChange(value);
        }
    };
    return (
        <div>
            <label>{label}</label>
            <select onChange={onSelectChange}>
                {optionEls}
            </select>
        </div>
    );
};

export default SingleSelect;