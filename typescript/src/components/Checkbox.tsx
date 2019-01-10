import * as React from "react";

interface CheckboxProps {
  slug: string;
  name: string;
  isChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = (props: CheckboxProps) => {
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
