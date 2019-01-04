import React, { Component } from "react";
import { gifIds } from "./utils/gifs";
import Select from "./components/Select";
import Checkbox from "./components/Checkbox";
import { getGif } from "./utils/api";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: "",
      isOriginal: false,
      isHd: false,
      isDownsized: false,
      idsToData: {}
    };
  }
  handleCheckboxChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };
  handleSelectChange = event => {
    const selectedId = event.target.value;
    this.setState({
      selectedId
    });
    if (selectedId && !this.state.idsToData[selectedId]) {
      getGif(selectedId)
        .then(data => {
          this.setState({
            idsToData: {
              ...this.state.idsToData,
              [selectedId]: data
            }
          });
        })
        .catch(err => {
          console.error("Something went wrong", err);
        });
    }
  };
  render() {
    const gifs = [];
    const { selectedId } = this.state;
    let totalSize = 0;
    if (selectedId && this.state.idsToData[selectedId]) {
      for (const gif of this.state.idsToData[selectedId]) {
        if (this.state.isOriginal) {
          const gifSize = gif.images.original.size;
          gifs.push({
            ...gif.images.original,
            key: gifSize + "o"
          });
          totalSize += gifSize;
        }
        if (this.state.isDownsized) {
          const gifSize = gif.images.downsized.size;
          gifs.push({
            ...gif.images.downsized,
            key: gifSize + "d"
          });
          totalSize += gifSize;
        }
        if (this.state.isHd) {
          const gifSize = gif.images.hd.size;
          gifs.push({ ...gif.images.hd, key: gifSize + "hd" });
          totalSize += gifSize;
        }
      }
    }
    return (
      <div className="app">
        <div className="app__sidebar">
          <h1 className="app__heading">Giphy API Tester</h1>
          <Select
            slug="gifs"
            name="Gif"
            gifs={gifIds}
            value={this.state.selectedId}
            onChange={this.handleSelectChange}
          />
          <div className="checkbox__wrapper">
            <label className="checkbox__label">Quality:</label>
            <Checkbox
              name={"Original"}
              slug={"isOriginal"}
              isChecked={this.state.isOriginal}
              onChange={this.handleCheckboxChange}
            />
            <Checkbox
              name={"HD"}
              slug={"isHd"}
              isChecked={this.state.isHd}
              onChange={this.handleCheckboxChange}
            />
            <Checkbox
              name={"Downsized"}
              slug={"isDownsized"}
              isChecked={this.state.isDownsized}
              onChange={this.handleCheckboxChange}
            />
          </div>
        </div>
        <div className="app__main">
          <div className="main">
            <h1>Total size: {totalSize}</h1>
            {gifs.map(gif => {
              return (
                <div key={gif.key}>
                  <img src={gif.url} alt={gif.url} />
                  <p>{gif.size}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
