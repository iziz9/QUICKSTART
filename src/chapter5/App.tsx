import React, { Component } from "react";
import Clock from "./Clock";

type State = {
  formatString: string
};

class App extends Component<{}, State> {
  state = {
    formatString: "HH:mm:ss"
  };

  render() {
    return (
    <div className="boxStyle">
      <div>
        <h2>간단한 디지털 시계</h2>
        <hr />
        <Clock formatString={this.state.formatString} />
      </div>
    </div>)
  }
}

export default App;
