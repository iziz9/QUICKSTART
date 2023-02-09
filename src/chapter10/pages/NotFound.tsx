import React from "react";
import { useLocation } from "react-router";

type Props = {};

const NotFound = (props: Props) => {
  const location = useLocation()
  return (
    <div className="m-3">
      <h3>존재하지 않는 경로입니다.</h3>
      <p>요청 경로 : {location.pathname}</p>
    </div>
  )
};

export default NotFound;
