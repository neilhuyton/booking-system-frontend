import React from "react";

const Select = ({ data, valueField, nameField, changeHandler, cssClass }) => {
  const optionItems = data.map(item => {
    return (
      <option value={item[valueField]} key={item[valueField]}>
        {item[nameField]}
      </option>
    );
  });

  return (
    <select
      defaultValue="-- Please select --"
      onChange={e => changeHandler(e.target.value)}
      className={cssClass}
    >
      <option>-- Please select --</option>
      {optionItems}
    </select>
  );
};

export default Select;
