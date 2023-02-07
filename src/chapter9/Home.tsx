import React from "react";
import { useLocation } from "react-router";

type Props = {};
type LocationStateType = {
  from: string
}

const Home = (props: Props) => {

  const location = useLocation()
  const state = location.state as LocationStateType
  const from = state ? state.from : ''

  return (
    <div className="card card-body"> 
      <h2>HOME</h2>
      <br />
      {from !== '' ? <h4 className="green">( '{ from }' 에서 돌아왔어요! )</h4> : ''}
    </div>
  )
};

export default Home;
