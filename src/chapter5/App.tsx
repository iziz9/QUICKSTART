import React, { Component } from "react";
import Chatting from "./Chatting";
import Clock from "./Clock";
import ErrorBoundary from "./ErrorBoundary";
import UserList from "./UserList";

type State = {
  formatString: string,
  clockVisible: boolean
};

class App extends Component<{}, State> {
  state = {
    formatString: "HH:mm:ss",
    clockVisible: false
  };

  changeFormat = (format: string) => {
    this.setState({ formatString: format });
  }

  render() {
    return (
    <div className="boxStyle">
      <div>
          <h2>간단한 디지털 시계</h2>
          <button onClick={() => this.setState({clockVisible: !this.state.clockVisible})}>시계 토글</button>
        <hr />
        {this.state.clockVisible ? <Clock formatString={this.state.formatString} /> : ""}
      </div>
      <div>
        <ErrorBoundary>
            <div>
              참여 사용자: <UserList users={['배현수', '조민정']} />
              <hr />
              <Chatting />
          </div>
        </ErrorBoundary>
      </div>
    </div>)
  }
}

export default App;
