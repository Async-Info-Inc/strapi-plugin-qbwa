import React from "react";
const SingleSelect = ({ label = "label: ", options = [{label: 'option 1', value: 1}], value = 1, onChange }) => {
    const handleChange = (e) => {
        console.log(`SingleSelect: handleChange: ${e.target.value}`);
        onChange(e.target.value);
    };
    console.log(`SingleSelect: ${label} ${options} ${value}`);
    return (
        <div className="form-group">
        <label>{label}</label>
        <select className="form-control" value={value} onChange={handleChange}>
            {options.map((option) => (
            <option key={option.value} value={option.value}>
                {option.label}
            </option>
            ))}
        </select>
        </div>
    );
};

export default SingleSelect;