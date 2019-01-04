import React from "react";

interface CheckboxProps {
  slug: string;
  name: string;
  isChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = (props: CheckboxProps) => {
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
