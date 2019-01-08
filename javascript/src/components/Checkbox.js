import React from "react";

const Checkbox = props => {
  return (
    <div className="checkbox">
      <label htmlFor={props.slug}>
        {props.name}:
        <input
          name={props.slug}
          type="checkbox"
          checked={props.isChecked}
          onChange={props.onChange}
        />
      </label>
    </div>
  );
};

export default Checkbox;
