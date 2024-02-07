import React from "react";
import './LoadingSkeleton.css'

function CartLoading() {
  return (
    <div className="m-3 md:flex">
      <div className="md:w-2/3">
        {/* cart items */}
        <div className="h-40 bg-white p-5 flex ">
          <div className="h-full w-1/3 mr-2 loadingContent"></div>
          <div className="flex flex-col justify-between w-2/3">
            <div className="loadingContent h-8"></div>
            <div className="loadingContent h-8"></div>
            <div className="loadingContent h-8"></div>
          </div>
        </div>
        <div className="h-40 bg-white p-5 flex my-5">
          <div className="h-full w-1/3 mr-2 loadingContent"></div>
          <div className="flex flex-col justify-between w-2/3">
            <div className="loadingContent h-8"></div>
            <div className="loadingContent h-8"></div>
            <div className="loadingContent h-8"></div>
          </div>
        </div>
        <div className="h-40 bg-white p-5 flex my-5">
          <div className="h-full w-1/3 mr-2 loadingContent"></div>
          <div className="flex flex-col justify-between w-2/3">
            <div className="loadingContent h-8"></div>
            <div className="loadingContent h-8"></div>
            <div className="loadingContent h-8"></div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex h-60 p-5 bg-white flex-col justify-between w-1/3 ml-5">
        {/* total */}
        <div className="loadingContent h-8"></div>
        <div className="loadingContent h-8"></div>
        <div className="loadingContent h-8"></div>
        <div className="loadingContent h-8"></div>
      </div>
    </div>
  );
}

export default CartLoading;
