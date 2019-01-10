import React from "react";

const Select = props => {
  return (
    <React.Fragment>
      <label className="select__label" htmlFor={props.slug}>
        Choose a {props.name}:
      </label>
      <div className="select">
        <select
          id={props.slug}
          value={props.value}
          onChange={props.onChange}
          className="select__input"
        >
          {props.gifs.map(gif => {
            console.log(gif);
            return (
              <option key={gif.id} value={gif.id}>
                {gif.name}
              </option>
            );
          })}
        </select>
      </div>
    </React.Fragment>
  );
};

export default Select;
