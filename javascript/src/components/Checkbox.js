import React from "react";

const Checkbox = props => {
  return (
    <div className="checkbox">
      <input
        id={props.slug}
        name={props.slug}
        type="checkbox"
        checked={props.isChecked}
        onChange={props.onChange}
      />
      <label htmlFor={props.slug}>{props.name}</label>
    </div>
  );
};

export default Checkbox;
