import React, { Component, ChangeEvent, KeyboardEvent } from "react";
import Box from "./Box";


type State = {
  msg: string,
  msgList: Array<string>
};

class Chatting extends Component<{}, State> {
  chatRef = React.createRef<HTMLDivElement>();
  state: State = { msg: '', msgList: [] }
  
  getSnapshotBeforeUpdate(prevProps: {}, prevState: State):number {
    const chat = this.chatRef.current;
    if (prevState.msgList !== this.state.msgList && chat !== null) {
      return chat.offsetHeight
    }
    return 0;
  }

  componentDidUpdate(prevProps: {}, prevState: State, snapshot: number) {
    const chat = this.chatRef.current;
    if (snapshot > 0 && chat !== null) {
      chat.scrollTop = chat.scrollHeight - snapshot;
    }
  }
  
  setMsg = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({...this.state, msg: e.target.value})
  }

  msgKeyup = (e: KeyboardEvent<HTMLInputElement>) => { 
    if (e.key === 'Enter') {
      this.setState({msg: "", msgList: [...this.state.msgList, this.state.msg]})
    }
  }

  
  render() {
    console.log(this.state)
    return (
      <div>
        채팅 목록 : <br />
        <div
          ref={this.chatRef}
          style={{width: 400, height: 200, overflow: 'auto', border: 'solid 1px goldenrod'}}
        >
          {this.state.msgList.map((item, index) => (
            <Box chatRef={this.chatRef} msgList={this.state.msgList} key={index} item={item} />
          )
          )}
        </div>
        <div>
        입력 메시지 : <input type='text' value={this.state.msg} onChange={this.setMsg} onKeyUp={this.msgKeyup} />
        </div>
      </div>
    )

  }
}

export default Chatting;
