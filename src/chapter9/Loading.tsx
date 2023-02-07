import React from "react";
import {BeatLoader} from 'react-spinners'


const Loading = () => {
  return (
    <div className="w-100 h-75 position-fixed">
      <div className="row w-100 justify-content-center aling-items-center">
        <div className="col-6 text-center">
          <h3>Loading...</h3>
          <BeatLoader size='50px' margin='2px'  />
        </div>
      </div>
    </div>
  )
};

export default Loading;
