import React from "react";
import {useLocation} from 'react-router'

const NotFound = () => {
  
  const location = useLocation()

  return (
    <div className="m-5">
      <h2>존재하지 않는 경로입니다.</h2>
      <p>요청 경로 : { location.pathname }</p>
    </div>
  )
};

export default NotFound;
