import React from "react";
const SingleSelect = ({ label, options, value, onChange }) => {
    const handleChange = (e) => {
        onChange(e.target.value);
    };
    
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