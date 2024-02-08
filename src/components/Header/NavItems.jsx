import React from "react";
import { NavLink } from "react-router-dom";

function NavItems(props) {
  return (
    <div className="md:flex justify-around text-white font-semibold text-lg">
      <div onClick={()=>{props.setNavItemsDisplay('hidden')}}>
        <NavLink to={"/categories"}>
          <div className=" p-2 md:text-center hover:bg-slate-700">All Products</div>
        </NavLink>
      </div>
      <div onClick={()=>{props.setNavItemsDisplay('hidden')}}>
        <NavLink to={"/categories/Computer & Laptops"}>
          <div className=" p-2 md:text-center hover:bg-slate-700">Computer & Laptops</div>
        </NavLink>
      </div>
      <div onClick={()=>{props.setNavItemsDisplay('hidden')}}>
        <NavLink to={"/categories/Home Appliances"}>
          <div className=" p-2 md:text-center hover:bg-slate-700">Home Appliances</div>
        </NavLink>
      </div>
      <div onClick={()=>{props.setNavItemsDisplay('hidden')}}>
        <NavLink to={"/categories/Gaming"}>
          <div className=" p-2 md:text-center hover:bg-slate-700">Gaming</div>
        </NavLink>
      </div>
      <div onClick={()=>{props.setNavItemsDisplay('hidden')}}>
        <NavLink to={"/categories/Smart Devices"}>
          <div className=" p-2 md:text-center hover:bg-slate-700">Smart Devices</div>
        </NavLink>
      </div>
      <div onClick={()=>{props.setNavItemsDisplay('hidden')}}>
        <NavLink to={"/categories/Mobile & Accessories"}>
          <div className=" p-2 md:text-center hover:bg-slate-700">Mobile & Accessories</div>
        </NavLink>
      </div>
      <div onClick={()=>{props.setNavItemsDisplay('hidden')}}>
        <NavLink to={"/user/orders"}>
          <div className=" p-2 md:text-center hover:bg-slate-700">Track Orders</div>
        </NavLink>
      </div>
      <div onClick={()=>{props.setNavItemsDisplay('hidden')}}>
          <div className=" p-2 md:text-center hover:bg-slate-700"><a href="https://seller-bucketbuy.onrender.com/">Become a Seller</a></div>
      
      </div>
    </div>
  );
}

export default NavItems;
