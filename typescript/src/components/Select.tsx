import * as React from "react";

interface Gif {
  id: string;
  name: string;
}

interface SelectProps {
  slug: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  gifs: Gif[];
}

const Select = (props: SelectProps) => {
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
