import React, { Component, ErrorInfo } from "react";

type Props = {children: JSX.Element};
type State = {hasError:boolean, errorMessage:string};

class ErrorBoundary extends Component<Props, State> {
  state = { hasError: false, errorMessage: "" };
  
  static getDerivedStateFromError(error: Error): State {
    return {hasError: true, errorMessage: error.message}
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(`에러명: ${error.name}, 에러메시지: ${error.message}, 컴포넌트 스택: ${errorInfo.componentStack}`)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>에러 발생</h2>
          <hr />
          <p>에러메시지: {this.state.errorMessage} </p>
        </div>
      )
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
