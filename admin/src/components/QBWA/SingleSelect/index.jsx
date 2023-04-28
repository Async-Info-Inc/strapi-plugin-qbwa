import React from "react";
const SingleSelect = ({ label = "label: ", options, value, onChange }) => {
    const handleChange = (e) => {
        console.log(`SingleSelect: handleChange: ${e.target.value}`);
        onChange(e.target.value);
    };
    console.log(`SingleSelect: ${label} ${JSON.stringify(options)} ${value}`);
    return (
        <div className="form-group">
        <label>{label}</label>
        <select className="form-control" onChange={handleChange}>
            {options.map((option) => {
                console.log(`Making option for: ${JSON.stringify(option)}`);
                return (<option value={option.value}>
                    {option.label}
                </option>);
            })}
        </select>
        </div>
    );
};

export default SingleSelect;