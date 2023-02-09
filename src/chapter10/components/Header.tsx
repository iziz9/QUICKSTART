import React, { useState } from "react";
import { Link } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {

  const [isNavShow, setIsNavShow] = useState<boolean>(false);
  

  return (
    <div className="navbar navbar-expand-sm bg-dark navbar-dark">
      <span className="navbar-brand ps-2">꼭 가봐야 할 여행지</span>
      <button className="navbar-toggler" type="button" onClick={() => setIsNavShow(!isNavShow)}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={
        isNavShow ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'
      }>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to='/about'>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/todos'>
              TodoList
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
};

export default Header;
