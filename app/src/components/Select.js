import React from "react";

const Select = props => {
  return (
    <div className="select__wrapper">
      <label className="select__label" htmlFor={props.slug}>
        Choose a {props.name}:
      </label>
      <select
        id={props.slug}
        value={props.value}
        onChange={props.onChange}
        className="select__input"
      >
        {props.gifs.map(gif => {
          return (
            <option key={gif.id} value={gif.id}>
              {gif.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
