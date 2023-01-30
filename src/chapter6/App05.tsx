import React, {useRef} from "react";

type Props = {};

const App05 = (props: Props) => {

  const elName: React.RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
  const goFirstInputElement = () => {
    if (elName.current) {
      elName.current.focus()
    }
  }

  return (
    <div className="boxStyle">
      이름: <input ref={elName} type="text" defaultValue="도영" />
      <br />
      전화: <input type="text" defaultValue="010-1234-5678" />
      <br />
      주소: <input type="text" defaultValue="서울" />
      <br />
      <button onClick={goFirstInputElement}>첫번쨰 필드로 포커스 이동</button>
    </div>
  )
};

export default App05;
