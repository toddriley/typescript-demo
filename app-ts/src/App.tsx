import * as React from "react";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import { ApiData, getGif } from "./utils/api";
import "./App.css";

interface AppProps {}
interface AppState {
  selectedId: string;
  checkboxes: {
    isOriginal: boolean;
    isHd: boolean;
    isDownsized: boolean;
  };
  idsToData: { [key: string]: ApiData };
}
class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      selectedId: "",
      checkboxes: {
        isOriginal: false,
        isHd: false,
        isDownsized: false
      },
      idsToData: {}
    };
  }
  handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    if (target.type !== "checkbox") {
      console.error("Expected input type to be checkbox");
    } else {
      const value = target.checked;
      const name = target.name;

      /**
       * This is a tricky one. `value` is a boolean, but our state contains non-booleans
       * such as `selectedId` and `idsToData`. If we group together all of our boolean
       * state variables into a new sub-object (`checkboxes` in this case) that cannot
       * contain non-booleans, then we can make the TypeScript compiler happy using
       * this index-signature syntax.
       */
      this.setState({
        checkboxes: {
          ...this.state.checkboxes,
          [name]: value
        }
      });
    }
  };
  handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
          {...this.state.checkboxes}
        />
        <Main
          selectedId={this.state.selectedId}
          idsToData={this.state.idsToData}
          {...this.state.checkboxes}
        />
      </div>
    );
  }
}

export default App;
