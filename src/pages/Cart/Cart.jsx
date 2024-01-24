import React, { useState } from "react";
import { useGetUserCartQuery } from "../../features/api/apiSlice";
import { NavLink } from "react-router-dom";

function Cart() {
  // demo cart items
  const products = [
    {
      "title": "ASUS Vivobook Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) X1504ZA-NJ325WS Laptop  (15.6 Inch, Quiet Blue, 1.70 kg, With MS Office)",
      "price": "₹36,990",
      "description": "Preloaded with MS Office Light Laptop without Optical Disk Drive 15.6 Inch Full HD, 16:9 Aspect Ratio, LED Backlit, 60Hz Refresh Rate, Brightness: 250nits, 45% NTSC Color Gamut, Anti-glare Display, TUV Rheinland Certified, Screen-to-Body Ratio: 84%",
      "productImages": ["https://rukminim2.flixcart.com/image/416/416/xif0q/computer/c/v/k/x1504za-nj325ws-thin-and-light-laptop-asus-original-imagsyypnweh7zzy.jpeg?q=70", "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/m/j/a/x1504za-nj325ws-thin-and-light-laptop-asus-original-imagsyypbjftvzz2.jpeg?q=70"],
      "category": "Computer & Laptops",
      "subcategory":"Laptops",
      "owner": {
        "$oid": "659c02cc12f91ebe877f67fd"
      },
      "totalOrders": 0,
      "createdAt": {
        "$date": "2024-01-04T10:11:15.630Z"
      },
      "updatedAt": {
        "$date": "2024-01-04T10:11:15.630Z"
      },
      "__v": 0
    },
    {
      "title": "CHUWI Intel Core i3 10th Gen 1005G1 - (8 GB/512 GB SSD/Windows 11 Home) CoreBook X Grey Laptop  (14 inch, Grey, 1.40 kg)",
      "price": "₹24,990",
      "description": "Experience a host of possibilities with this brilliant and stunning CoreBook X laptop. This compact laptop comes with a 35.5 cm (14) IPS screen and it is lightweight, which helps you carry it anywhere with ease. The Intel Core i3-1005G1 processor on this laptop delivers an incredibly smooth performance. Experience quick responsiveness on this laptop as it is clocked with 1.2 GHz that can reach up to 3.4 GHz. Powered with a 46.2 Wh battery, you can work on this CoreBook X all day long. The availability of 8 GB of DDR4 RAM and 512 GB of SSD storage simply improves your productivity.",
      "productImages": ["https://rukminim2.flixcart.com/image/416/416/xif0q/computer/n/b/l/corebook-x-laptop-chuwi-original-imagwkfspzdtns4j.jpeg?q=70", "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/j/n/m/-original-imagr93zygmtpyce.jpeg?q=70"],
      "category": "Computer & Laptops",
      "subcategory":"Laptops",
      "owner": {
        "$oid": "659c02cc12f91ebe877f67fd"
      },
      "totalOrders": 0,
      "createdAt": {
        "$date": "2024-01-04T10:11:15.630Z"
      },
      "updatedAt": {
        "$date": "2024-01-04T10:11:15.630Z"
      },
      "__v": 0
    },
    {
      "title": "ASUS Vivobook 15 Intel Core i5 11th Gen 1135G7 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ522WS Thin and Light Laptop  (15.6 Inch, Transparent Silver, 1.80 kg, With MS Office)",
      "price": "₹24,990",
      "description": "The outstanding Asus VivoBook 15 laptop, created to simplify your workday and improve performance, offers fantastic efficiency and stunning aesthetics. This laptop handles all of your multitasking requirements and gives you dynamic performance thanks to the Intel Core processor. Additionally, the dual-storage ASUS VivoBook 15 offers you the benefits of incredibly fast data speed and ample storage capacity. Moreover, its svelte and exquisite form makes you the centre of attention everywhere you go when donning it with you.",
      "productImages": ["https://rukminim2.flixcart.com/image/416/416/xif0q/computer/c/l/t/-original-imagtucmkuwggepy.jpeg?q=70", "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/i/x/o/-original-imagdx9qedcveu2m.jpeg?q=70"],
      "category": "Computer & Laptops",
      "subcategory":"Laptops",
      "owner": {
        "$oid": "659c02cc12f91ebe877f67fd"
      },
      "totalOrders": 0,
      "createdAt": {
        "$date": "2024-01-04T10:11:15.630Z"
      },
      "updatedAt": {
        "$date": "2024-01-04T10:11:15.630Z"
      },
      "__v": 0
    },
    {
      "title": "DELL Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) New Inspiron 15 Laptop Thin and Light Laptop  (38 cm, Carbon Black, 1.65 Kg, With MS Office)",
      "price": "₹34,990",
      "description": "With a PCIe SSD and a 12th-generation Intel Core i3 processor incorporated into this Dell laptop, you can enjoy a quick yet peaceful performance. Additionally, ComfortView software lowers hazardous blue light emissions to keep your eyes pleasant during prolonged viewing sessions. Furthermore, enjoy the large keycaps and a big touchpad that make it simple to access your content. Moreover, the FHD display of this laptop is surrounded by a stylish, slim bezel on three sides, enhancing your visual experience.",
      "productImages": ["https://rukminim2.flixcart.com/image/416/416/xif0q/computer/n/o/s/-original-imaghzah9mjvukjz.jpeg?q=70", "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/p/9/z/-original-imaghzahqhjhgrfg.jpeg?q=70"],
      "category": "Computer & Laptops",
      "subcategory":"Laptops",
      "owner": {
        "$oid": "659c02cc12f91ebe877f67fd"
      },
      "totalOrders": 0,
      "createdAt": {
        "$date": "2024-01-04T10:11:15.630Z"
      },
      "updatedAt": {
        "$date": "2024-01-04T10:11:15.630Z"
      },
      "__v": 0
    }
  ];

  const {data:cart} = useGetUserCartQuery()
  console.log(cart);

  useState(() => {});
  return (
    <div className="my-10 flex flex-col md:flex-row mx-auto">
     <div className="flex flex-col">
     {cart && cart.products?.map((product)=>(
        <div key={product._id} className="bg-white mb-5 border h-fit p-2 rounded-md flex flex-col justify-between ">
        {/* cart items */}
        <div className="text-lg font-bold text-right mr-5 hover:cursor-pointer"></div>
        <div className="flex flex-col sm:flex-row items-center sm:items-start">
          <div className="max-h-28 max-w-28">
            <NavLink to={`/products/${product.product._id}`}>
            <img
              src={product.product.productImages[0]}
              alt=""
              className="w-full h-full object-contain"
            />
            </NavLink>
          </div>
          <div className="px-4 flex flex-col justify-between p-2  w-full">
            <NavLink to={`/products/${product.product._id}`}>
            <div className="text-md sm:text-lg md:text-lg font-bold py-2 sm:py-0">
             {product.product.title}
            </div>
            </NavLink>
            <div className="font-semibold px-2 py-1 bg-blue-500 w-fit text-white rounded-sm text-sm">
              <i className="fa-solid fa-star text-yellow-500"></i>4.5
            </div>
            <div className="py-2 flex justify-between">
              {" "}
              <div>{product.product.price}</div>
              <div className="flex items-center">
                <div className="mx-2 flex">
                  {/* quantity */}
                  Qty.
                  <div className="border">
                    {" "}
                    <button className="w-6 h-6 font-bold">-</button>
                    <input
                      type="number"
                      value={product.quantity}
                      onChange={()=>{}}
                      className="focus:outline-0 border-r border-l w-6 h-6 font-bold text-center remove-arrow"
                    />
                    <button className="w-6 h-6 font-bold">+</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center">
              <div className="flex white">
                <div>
                  {/* subtotal */}
                  <div>Subtotal : <i className="fa-solid fa-inr text-sm"></i> {product.product.price.slice(1)*product.quantity}</div>
                </div>
              </div>

              <div className="sm:mx-3 my-2 flex whitespace-nowrap">
                {/* buy now btn */}
                <div>
                  <button className="bg-orange-500 px-2 rounded-sm py-1 text-white font-bold">
                    Buy Now!
                  </button>
                </div>
                <div>
                  <button className="mx-2 bg-blue-500 px-2 rounded-sm py-1 text-white font-bold">
                    Remove Item
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ))}

     </div>
      <div className="bg-white sm:mx-5 p-2 h-fit mt-10 md:mt-0">
        {/* checkout */}
        <div className="">
          <span className="font-bold">Address</span> :{" "}
          {`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis tempore `}
        </div>
        <div className="py-3"><hr /></div>
        <div className="flex justify-between">
          <div>Subtotal</div>
          <div>{`Rs 62,000`}</div>
        </div>
        <div className="flex justify-between">
          <div>Delivery Charges</div>
          <div>{`Rs 0`}</div>
        </div>
        <div className="py-3"><hr /></div>
        <div className="flex justify-between text-lg font-semibold">
          <div>Total</div>
          <div>{`Rs 0`}</div>
        </div>
        <div className="py-3"><hr /></div>
        <div>
          <button className="text-center w-full bg-orange-500 text-white font-semibold p-1 text-lg rounded-md">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
