import React from "react";
import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <div className="card bg-light">
      <div className="card-heading">
        <h2 className="text-center m-3">Silica Gel</h2>
        <p>
          <a href="https://www.instagram.com/silicagel.official/">https://www.instagram.com/silicagel.official/</a>
        </p>
        <div className="row">
          <div className="col-12">
            <Link className="btn btn-success menu" to='/'>
              HOME  
            </Link>
            <Link className="btn btn-success menu" to='/about'>
              About
            </Link>
            <Link className="btn btn-success menu" to='/members'>
              Members
            </Link>
            <Link className="btn btn-success menu" to='/songs'>
              Songs
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Header;
