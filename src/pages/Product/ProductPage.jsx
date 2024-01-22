import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { Product } from "../../components";

export default function ProductPage() {
  const { productId } = useParams();
  const allProduct = useSelector((state) => state.product.products);
  const product = allProduct.find((product) => product._id === productId);
  let [displayImage, setDisplayImage] = useState(product.productImages[0]);
  let [quantity, setQuantity] = useState(1);
  const navigate = useNavigate()

  let suggestedProducts = allProduct.filter(
    (productItem) => productItem.subcategory === product.subcategory
  );

  console.log(suggestedProducts);

  // console.log(allProduct)

  console.log(product);


  function quantityLimiter(e){
    if (quantity < 0) {
      setQuantity(1);
    }else{
      
    setQuantity(e.target.value)
    }

  }

  function scrollToTop(){
    document.scrollTop=0
    document.documentElement.scrollTop=0
  }

  useEffect(() => {
    // scrollToTop()
    
    setDisplayImage(product.productImages[0])
    setQuantity(1)
  }, [productId]);

  return (
    <div className="container flex flex-col py-10 bg-white px-4">
      <div className="flex flex-col md:justify-around md:flex-row ">
        <div className="flex flex-col items-center md:items-start ">
          <div className="mb-5">
            <img src={displayImage} className="" alt="" />
          </div>
          <div className="flex h-20 ">
            {product?.productImages &&
              product?.productImages?.map((image,index) => {
                return (
                  <div
                    className="h-20 w-20 mx-2 cursor-pointer"
                    key={index}
                    onClick={() => {
                      setDisplayImage(image);
                    }}
                  >
                    <img src={image} className="h-full w-full object-contain" alt="" />
                  </div>
                );
              })}
          </div>
        </div>

        <div className="flex flex-col md:ml-5 max-w-[800px]">
          <div className="mt-5 md:mt-0 text-xl sm:text-2xl font-bold">
            <h1>{product.title}</h1>
          </div>
          <div className="text-xl my-5 font-semibold">Price : {product.price}</div>
          <div className="flex flex-col ">
            <div className="flex flex-col sm:flex-row sm:items-center">
              <div>
                {/* quantity */}
                <label htmlFor="quantity" className="font-bold text-lg">
                  Quantity :{" "}
                </label>
                <input
                  name="quantity"
                  min={1}
                  max={10}
                  value={quantity}
                  onChange={quantityLimiter}
                  type="number"
                  className="text-center bg-white w-20 border mx-5"
                />
              </div>

              <div className="flex mt-5 sm:mt-0">
              <div>
                {/* add to cart */}
                <button className="bg-blue-500 px-5  md:mx-3 whitespace-nowrap p-2  md:py-1 text-white font-semibold text-lg">
                <i class="fa-solid fa-cart-shopping"></i>  Add to Cart
                </button>
              </div>


              <div>
                {/* Buy Now  */}
                <button className="bg-orange-500 px-5 mx-3 md:mx-3 whitespace-nowrap p-2  md:py-1 text-white font-semibold text-lg">
                  Buy Now
                </button>
              </div>
              </div>
            </div>

            <div className="mt-5">
              {/* Product Description */}
              <div className="text-lg font-bold">Description</div>
              <div>
                {product.description} Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Veniam tempore fuga sequi blanditiis, nostrum
                quas, perferendis ad soluta illo facere amet minus sint quos
                libero? Doloribus beatae sint dicta harum? Quibusdam voluptates,
                eos perspiciatis excepturi, voluptatem quis, distinctio et
                dignissimos ab ullam praesentium deleniti nostrum id a. Fuga,
                distinctio ipsa molestiae magni dolorem dolorum quaerat
                perspiciatis optio. Excepturi, totam obcaecati.
              </div>
            </div>
          </div>
        </div>
      </div>





      {/* suggested products */}
      <div className="mt-10">
        <div>
          <h3 className="text-2xl font-bold "> Products You May Also Like</h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {suggestedProducts && suggestedProducts.slice(0,8).map((product)=>{
            return <div key={product._id} className=" mx-1">
       
             <Product 
              productId={product._id}
              title={product.title}
              price={product.price}
              productImages={product.productImages}
              ratings={product.ratings}
              />
   
            </div>
          })}

         
        </div>
        <div className="flex justify-center">
            <button className="p-2 px-5 font-bold text-white text-lg bg-blue-500 rounded-sm" onClick={()=>{navigate(`/categories/${product.category}/${product.subcategory}`)}}>Browse More...</button>
          </div>
      </div>
    </div>
  );
}
