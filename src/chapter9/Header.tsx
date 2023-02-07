import React from "react";
import {NavLink} from 'react-router-dom'


const Header = () => {

  // console.log(isActive)

  return (
    <div className="card bg-light">
      <div className="card-heading">
        <h2 className="text-center m-3">Silica Gel</h2>
        <p>
          <a href="https://www.instagram.com/silicagel.official/">https://www.instagram.com/silicagel.official/</a>
        </p>
        <div className="row">
          <div className="col-12">
            <NavLink to='/home' className={( {isActive} ) => {return isActive ? 'btn menu btn-dark' : 'btn menu btn-success'}} >
              HOME  
            </NavLink>
            <NavLink to='/about' className={( {isActive} ) => {return isActive ? 'btn menu btn-dark' : 'btn menu btn-success'}}>
              About
            </NavLink>
            <NavLink to='/members' className={( {isActive} ) => {return isActive ? 'btn menu btn-dark' : 'btn menu btn-success'}}>
              Members
            </NavLink>
            <NavLink to='/songs' className={( {isActive} ) => {return isActive ? 'btn menu btn-dark' : 'btn menu btn-success'}}>
              Songs
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Header;
