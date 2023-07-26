import React from 'react';

const DynamicFields = ({ fields, handleChange }) => {
  const renderInputField = (field) => {
    const { type, label, name, required, options, divClassName, ...otherProps } = field;

    switch (type) {
      case 'text':
      case 'number':
        return (
          <div key={name} className={divClassName || 'box'}>
            <label>
              {label} <span> {required ? '*' : null} </span>
            </label>
            <input
              type={type}
              name={name}
              required={required}
              {...otherProps}
              className="input"
            />
          </div>
        );
      case 'select':
        return (
          <div key={name} className={divClassName || 'box'}>
            <label>
              {label} <span>{required ? '*' : null}</span>
            </label>
            <select name={name} required={required}  className="input">
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
          <div key={name} className={divClassName || 'box'}>
            <label>
              <input type="checkbox" name={name} onChange={handleChange} {...otherProps}/>
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
