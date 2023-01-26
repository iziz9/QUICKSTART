import React, { Component} from "react";

type Props = {
  chatRef: any,
  msgList: Array<string>,
  item: string
};

type State = {
};

class Box extends Component<Props, State> {

  //enter 누르기 전까지는 채팅목록에 등록된 li태그는 업데이트되지 않음
  shouldComponentUpdate(nextProps: Props, nextState: {}) {
    if (nextProps.msgList !== this.props.msgList) { 
      return true;
    }
    return false;
  }

  render() {
    return (
      <li>{this.props.item}</li>
    )
  }
}

export default Box;
