import React from "react";
import {
  DisplayProducts,
  ProductCategories,
  SearchBar,
  Slideshow,
  SuggestedProductsLoading,
} from "../../components";
import { useGetProductsQuery } from "../../features/api/apiSlice";

export default function Home() {

  const {data:laptops, isLoading:isLaptopsLoading} = useGetProductsQuery({category:'Computer & Laptops',subcategory:'Laptops'})

  const {data:homeAppliancesProducts, isLoading:isHomeAppliancesProductsLoading} = useGetProductsQuery({category:'Home Appliances',subcategory:'Kitchen Appliances'})
  
  
  const {data:smartPhones, isLoading:isSmartPhonesLoading} = useGetProductsQuery({category:'Mobile & Accessories',subcategory:'Smartphones'})
  
  
  const {data:smartLeds, isLoading: isSmartLedsLoading} = useGetProductsQuery({category:'Tv and Home Entertainment',subcategory:'Television'})
  
  
  const {data:smartWatches, isLoading: isSmartWatchesLoading} = useGetProductsQuery({category:'Wearables & Smart Devices',subcategory:'Smartwatches'})
  

  return (
    <div className="flex">
      <div className="flex flex-col">
        <div>
          

          {/* slideshow Component*/}
          <div>
            <div className="my-10">
              <Slideshow />
            </div>
          </div>

          <div className="my-5">
            {/* search bar */}
            <SearchBar/>
          </div>

          {/* ProductCategories Component */}
          <div className="my-10">
            <ProductCategories />
          </div>

           {/* Home Appliances */}
           <div className="my-10">
            {
              isHomeAppliancesProductsLoading ? <SuggestedProductsLoading iterationCount={4}/> : 
              <DisplayProducts category={'Home Appliances'} products={homeAppliancesProducts?.slice(0,4)} />
            }
          </div>


           {/* Trending Laptops */}
           <div className="my-10">
            {
              isLaptopsLoading ? <SuggestedProductsLoading iterationCount={4} />: 
              <DisplayProducts category={'Computer & Laptops'} subcategory={'Laptops'} products={laptops?.slice(0,4)} />
            }
          </div>


         {/* Mobile and Accessories */}
         <div className="my-10">
          {
            isSmartPhonesLoading? <SuggestedProductsLoading iterationCount={4} /> : 
            <DisplayProducts category={'Mobile & Accessories'} subcategory={'Smartphones'} products={smartPhones?.slice(0,4)} />
          }
          </div>

         {/* Television and Home Entertainment */}
         <div className="my-10">
          {
            isSmartLedsLoading ? <SuggestedProductsLoading iterationCount={4} /> : 
            <DisplayProducts category={'Tv and Home Entertainment'} subcategory={'Television'} products={smartLeds?.slice(0,4)} />
          }
          </div>


         {/* Smart Watches */}
         <div className="my-10">
          {
            isSmartWatchesLoading ? <SuggestedProductsLoading iterationCount={4} /> : 
            <DisplayProducts category={'Wearables & Smart Devices'} subcategory={'Smartwatches'} products={smartWatches?.slice(0,4)} />
          }
          </div>

        </div>
      </div>
    </div>
  );
}
