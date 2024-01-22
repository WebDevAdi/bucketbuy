import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Product } from "../../components";
import { useSelector } from "react-redux";
import { useGetProductsQuery } from "../../features/api/apiSlice"

function ProductListingPage() {
  const [sidebarDisplay, setSidebarDisplay] = useState("hidden");
  const { category, subcategory } = useParams();
  const productCategories = useSelector((state) => state.category.productCategories);
  const {data:products, isError} = useGetProductsQuery({category,subcategory})

  const scrollToSelectedCategoryInSideBar = () => {
    const sidebar = document.getElementById("sidebar");
    const categorySearched = document.getElementById(`${category}`);

    if (sidebar && categorySearched) {
      sidebar.scrollTop = categorySearched.offsetTop;
    }

    return null;
  };

  function scrollToTopOfPage(){
    document.body.scrollTop=0
    document.documentElement.scrollTop=0
  }

  useEffect(() => {
    scrollToTopOfPage()
    scrollToSelectedCategoryInSideBar()
  }, [category, subcategory]);

  return (
    <div className="flex md:my-20 relative bg-white">
      <div>
        <h4 className=" text-2xl font-bold hidden md:flex">Categories</h4>
        <div
          id="sidebar"
          className={`${sidebarDisplay} px-5 bg-white md:bg-inherit scrollbar-visible w-fit shrink-0 absolute  top-0 md:static  md:flex flex-col whitespace-nowrap flex-nowrap border-r-2 border-slate-400 max-h-[800px] overflow-auto `}
        >
          {/* close sidebar button */}
          <div className="md:hidden text-right pr-2 pt-3 text-xl">
            <i
              className="fa-solid fa-x"
              onClick={() => {
                setSidebarDisplay("hidden");
              }}
            ></i>
          </div>
          {Object.keys(productCategories).map((category) => {
            return (
              <div id={category} className="flex flex-col my-3" key={category}>
                <h3 className="text-lg font-bold">{category}</h3>
                <div className="pl-3">
                  <NavLink
                    to={`/categories/${category}`}
                    className={({ isActive }) =>
                      `${isActive ? "font-bold" : ""}`
                    }
                    end
                  >
                    <p className="my-2 hover:bg-blue-500 hover:text-white p-1" onClick={()=>{setSidebarDisplay('hidden')}}>
                      {" "}
                      All
                    </p>
                  </NavLink>
                  {productCategories[category].map((subcategory) => {
                    return (
                      <NavLink
                        className={({ isActive }) =>
                          `${isActive ? " font-bold" : ""}`
                        }
                        to={`/categories/${category}/${subcategory}`}
                        key={subcategory}
                      >
                        <p className="my-2 hover:bg-blue-500 hover:text-white p-1" onClick={()=>{setSidebarDisplay('hidden')}}>
                          {subcategory}
                        </p>
                      </NavLink>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Product lists here */}

      {!isError && <div className="md:ml-10 w-full scrollbar-invisible  md:max-h-[800px] md:overflow-auto">
        {/* cartegory and sort containers */}
        <div className="mt-5 flex items-center bg-white border-b md:hidden py-3">
          <div
            className="w-full text-center font-semibold"
            onClick={() => {
              setSidebarDisplay("");
            }}
          >
            <i className="fa-solid fa-list"></i> Categories
          </div>
          <div className="w-0.5 h-8 bg-black"></div>
          <div className="w-full text-center font-semibold text-sm">
            <i className="fa-solid fa-sort"></i> Sort
            <select name="sort" id="" className="focus:outline-slate-400 text-center hover:bg-blue">
              <option value="" >Default</option>
              <option value="" >Popularity</option>
              <option value="" >Price: Low to High</option>
              <option value="" >Price: High to Low</option>
            </select>
          </div>
        </div>
        <div className="bg-white">
          <h1 className="text-3xl font-bold px-3 py-5">
            Showing Results for {`"${subcategory ? subcategory : category}"`}
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3">
            {products &&
              products.map((product) => {
                return (
                  <div
                    key={product._id}
                    className="flex justify-center border-2 m-2 hover:shadow-lg shadow-slate-500"
                  >
                    <Product
                      title={product.title}
                      price={product.price}
                      productImages={product.productImages}
                      ratings={product.ratings}
                      aspectRatio={"video"}
                      productId={product._id}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>}
    </div>
  );
}

export default ProductListingPage;
