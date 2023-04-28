import React from "react";
import Logger from "../../../../../qbwa/utils/Logger";
const defaultChangeHandler = (value) => {
    Logger.log("SingleSelect Default Change Handler", [
        `value change: ${value}`
    ]);
};
const SingleSelect = ({ label = "label: ", options = [], onChange = defaultChangeHandler }) => {
    Logger.log("SingleSelect", [
        `label: ${label}`,
        `options: ${Logger.arrayToString(options)}`
    ]);
    const optionEls = options.map((option) => {
        return <option value={option}>{option}</option>;
    });
    const onSelectChange = (event) => {
        const value = event.target.value;
        onChange(value);
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