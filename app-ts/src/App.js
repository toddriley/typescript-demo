import React, { Component } from "react";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
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
    return (
      <div className="app">
        <Sidebar
          selectedId={this.state.selectedId}
          onSelectChange={this.handleSelectChange}
          onCheckboxChange={this.handleCheckboxChange}
          isOriginal={this.state.isOriginal}
          isHd={this.state.isHd}
          isDownsized={this.state.isDownsized}
        />
        <Main
          selectedId={this.state.selectedId}
          idsToData={this.state.idsToData}
          isOriginal={this.state.isOriginal}
          isHd={this.state.isHd}
          isDownsized={this.state.isDownsized}
        />
      </div>
    );
  }
}

export default App;
