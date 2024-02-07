import React from "react";
import { useLocation } from "react-router-dom";
import { useGetProductsByUserSearchQuery } from "../../features/api/apiSlice";
import { Pagination, Product, ProductLoading, SuggestedProductsLoading } from "../../components";

function SearchResult() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("q");
  const page = queryParams.get("page");
  const { data: products, isLoading: isProductsLoading } =
    useGetProductsByUserSearchQuery({ query, page });
  console.log(products);

  return (
    <div className="m-5">
        <div className="flex justify-between flex-col md:flex-row text-xl my-8 font-bold">
            <div>Showing Search Results For '{query}'</div>
            <div>({products?.totalResults}) Products Found</div>
        </div>
      {isProductsLoading ? (
        <SuggestedProductsLoading/>
      ) : (
        <div className="">
          {
            products? 
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ">
            {products?.data?.map((product) => (
              <div key={product?.title} className="bg-white border  md:border-none md:p-5 p-0">
                <Product
                  productId={product?._id}
                  title={product?.title}
                  price={product?.price}
                  ratings={product?.ratings}
                  productImages={product?.productImages}
                />
              </div>
            ))}
          </div>:'Sorry No Products Found' 
          }
        </div>
      )}
      
      {
        !isProductsLoading && 
        <Pagination/>
      }

    </div>
  );
}

export default SearchResult;
