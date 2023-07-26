import React, { useState } from 'react';

const DynamicFields = ({ fields }) => {
  const [checkboxValues, setCheckboxValues] = useState({});

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxValues((prevValues) => ({ ...prevValues, [name]: checked ? 'Yes' : 'No' }));
  };

  const renderInputField = (field) => {
    const { type, label, name, required, options, ...otherProps } = field;

    switch (type) {
      case 'text':
      case 'number':
        return (
          <div key={name}>
            <label>
              {label} <span>{required ? '*' : null}</span>
            </label>
            <input type={type} name={name} required={required} {...otherProps} className="input" />
          </div>
        );
      case 'select':
        return (
          <div key={name}>
            <label>
              {label} <span>{required ? '*' : null}</span>
            </label>
            <select name={name} required={required} className="input">
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        );
      case 'checkbox':
        return (
          <div key={name}>
            <label>
              <input
                type="checkbox"
                name={name}
                onChange={handleCheckboxChange}
                checked={checkboxValues[name] === 'Yes'}
                {...otherProps}
              />
              {label}
            </label>
          </div>
        );
      default:
        return null;
    }
  };

  return <div>{fields.map((field) => renderInputField(field))}</div>;
};

export default DynamicFields;
