import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetProductsByUserSearchQuery } from "../../features/api/apiSlice";
import { Product, SearchBar, SuggestedProductsLoading } from "../../components";
import NotFound from "../NotFound/NotFound";

function SearchResult() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("q");
  const page = Number(queryParams.get("page"));
  const navigate = useNavigate();
  const { data: products, isLoading: isProductsLoading } =
    useGetProductsByUserSearchQuery({ query, page });

  const totalPages = Math.ceil(Number(products?.totalResults) / 8);
  console.log(totalPages);

  useEffect(() => {
    document.scrollingElement.scrollTo(top);
  });
  return (
    <div className="m-5">
      <div>
        <SearchBar value={query} />
      </div>
      {
        (products && page<=totalPages) && <div className="flex justify-between flex-col md:flex-row sm:text-xl my-8 font-bold md:text-xl">
          <div>
            Showing Search Results For '{query}' <br />
            Page {page} of {Math.ceil(products?.totalResults / 8)}
          </div>
          <div className="text-md">
            Showing {(page - 1) * 8 + 1} to{" "}
            {page * 8 > products?.totalResults
              ? products?.totalResults
              : page * 8}{" "}
            out of {products?.totalResults} Results
          </div>
          {/* <div>({products?.totalResults}) Products Found</div> */}
        </div>
      }
      {isProductsLoading ? (
        <SuggestedProductsLoading />
      ) : (
        <div className="bg-white">
          {products ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ">
              {products?.data?.map((product) => (
                <div
                  key={product?.title}
                  className="border  md:border-none md:p-5 p-0"
                >
                  <Product
                    productId={product?._id}
                    title={product?.title}
                    price={product?.price}
                    ratings={product?.ratings}
                    productImages={product?.productImages}
                  />
                </div>
              ))}
            </div>
          ) : (
            <NotFound />
          )}
        </div>
      )}

      {
        (products && page<=totalPages) && <div className="flex justify-between my-6">
        <div>
          <button
            className={`${
              page === 1 ? "bg-orange-300" : "bg-orange-500"
            } text-white font-bold p-2 px-5 text-sm rounded-lg`}
            disabled={page === 1}
            onClick={() => {
              navigate(`/products/search?q=${query}&page=${page - 1}`);
            }}
          >
            <i className="fa-solid fa-arrow-left"></i> Previous
          </button>
        </div>
        <div>
          <button
            disabled={page === totalPages}
            className={`${
              page === totalPages ? "bg-orange-300" : "bg-orange-500"
            } text-white font-bold p-2 px-5 text-sm rounded-lg`}
            onClick={() => {
              navigate(`/products/search?q=${query}&page=${page + 1}`);
            }}
          >
            Next <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
      }
    </div>
  );
}

export default SearchResult;
