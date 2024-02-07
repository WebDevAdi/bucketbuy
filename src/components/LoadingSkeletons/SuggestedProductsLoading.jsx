import React from "react";

function SuggestedProductsLoading() {
  const arr = [1,2,3,4,5,6,7,8]
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
     {
      arr.map((num)=>{
        return  <div className="" key={num}>
        <div className="h-40 loadingContent"></div>
        <div>
          <div className="h-8 loadingContent my-2"></div>
          <div className="flex flex-col items-end">
            <div className="h-8 w-11/12 loadingContent my-2"></div>
            <div className="h-8 w-1/2 loadingContent my-2"></div>
            <div></div>
          </div>
        </div>
      </div>

      })
     }
      
    </div>
  );
}

export default SuggestedProductsLoading;
