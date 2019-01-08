import React from "react";
import { gifIds } from "../utils/gifs";
import Select from "./Select";
import Checkbox from "./Checkbox";

interface SidebarProps {
  isOriginal: boolean;
  isHd: boolean;
  isDownsized: boolean;
  selectedId: string;
  onSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => any;
  onCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
}
const Sidebar = (props: SidebarProps) => {
  return (
    <div className="sidebar">
      <h1>Giphy API Tester</h1>
      <Select
        slug="gifs"
        name="Gif"
        gifs={gifIds}
        value={props.selectedId}
        onChange={props.onSelectChange}
      />
      <div className="checkbox__wrapper">
        <label>Quality:</label>
        <Checkbox
          name={"Original"}
          slug={"isOriginal"}
          isChecked={props.isOriginal}
          onChange={props.onCheckboxChange}
        />
        <Checkbox
          name={"HD"}
          slug={"isHd"}
          isChecked={props.isHd}
          onChange={props.onCheckboxChange}
        />
        <Checkbox
          name={"Downsized"}
          slug={"isDownsized"}
          isChecked={props.isDownsized}
          onChange={props.onCheckboxChange}
        />
      </div>
    </div>
  );
};

export default Sidebar;
