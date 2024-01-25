import Loader from "react-loader-spinner";
import React from 'react';
import { usePromiseTracker } from "react-promise-tracker";
 
export const LoadingSpinerComponent = (props) => {
const { promiseInProgress } = usePromiseTracker();
const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)",zIndex:"1000000"};
  return promiseInProgress && (
        <div style={style}>
          <Loader type="ThreeDots" color="#21c4a9" height="100" width="100" />
        </div>
      )
};