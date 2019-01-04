import React from "react";

const Select = props => {
  return (
    <div className="select__wrapper">
      <label className="select__label" htmlFor={props.itemsSlug}>
        Choose a {props.itemName}:
      </label>
      <select
        id={props.itemsSlug}
        value={props.value}
        onChange={props.onChange}
        className="select__input"
      >
        {props.itemsList.map(itemName => {
          return (
            <option key={itemName} value={itemName}>
              {itemName}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
