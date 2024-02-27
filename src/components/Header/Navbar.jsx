import React, { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import NavItems from "./NavItems";
import { useSelector } from "react-redux";
import UserProfile from "../UserProfile/UserProfile";
import { useGetCurrentUserQuery, useGetUserCartQuery } from "../../features/api/apiSlice";

export default function Navbar() {
  const [navItemsDisplay, setNavItemsDisplay] = useState("hidden");
  const [cartItemsNo, setCartItemsNo] = useState(0);
  const {data:user} = useGetCurrentUserQuery()

  const {data:cart } = useGetUserCartQuery()
  // console.log(cart.products.length);

  const navigate = useNavigate();

  const handleMenuClick = () => {
    if (navItemsDisplay === "hidden") {
      setNavItemsDisplay("");
    } else {
      setNavItemsDisplay("hidden");
    }
  };
  useEffect(()=>{
    if(cart){
      setCartItemsNo(cart?.products?.length)
    }
  },[cart])
  return (
    <div className="">
      <div className="bg-sky p-2 px-5">
        <div className="max-w-[1400px] mx-auto ">
          <div className="flex items-center justify-between">
            {/* logo */}
            <NavLink to={'/'}>
              <Logo />
            </NavLink>
            {/* user proflie and cart */}
            <div className="flex">
              <div
                className={`${user ? "" : "hidden"} relative group`}
              >
                {/* user profile */}
                <div className="h-10 w-10 rounded-full border bg-[url('https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1705384570~exp=1705385170~hmac=0c777ea2b7c0d1a6732152b82a83e0aadac20c8c45fb4a7dfe669aa04199fe05')] bg-cover cursor-pointer"></div>

                {/* user details didplayed when hovered  */}

                <div
                  className={`hidden group-hover:flex absolute z-10 top-12 md:top-10 -right-7 bg-white w-60 h-96 border  flex-col shadow-lg`}
                >
                  <UserProfile />
                </div>
              </div>

              <div className={`${user ? "hidden" : ""}`}>
                {/* login button showed when user is not logged in */}
                <div>
                  <button
                    className="text-white font-bold px-5 whitespace-nowrap bg-orange-500 p-2 rounded-md"
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Log In
                  </button>
                </div>
              </div>

              {/* cart icon */}
              <div className="text-white flex items-center text-3xl mx-3 relative cursor-pointer" onClick={()=>navigate('/cart')}>
                <i className="fa-solid fa-cart-shopping"></i>
                <div className="absolute  top-0 left-6 h-5 w-5 rounded-full bg-red-500 flex items-center justify-center text-white text-sm">
                  {cartItemsNo}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={``}>
        <div className="md:hidden flex justify-between bg-blue-500 p-2 px-4">
          {/* hambergurger icon */}
          <div
            className="md::hidden text-xl text-white flex items-center"
            onClick={handleMenuClick}
          >
            <i className="fa-solid fa-bars"></i>{" "}
            <span className="px-2 font-semibold">Menu</span>
          </div>

          {/* become a seller button */}
          <div>
            <button className="text-white font-bold hover:bg-orange-500 p-2 rounded-md">
              <a href="https://seller-bucketbuy.onrender.com/">Become a Seller</a>
            </button>
          </div>
        </div>
      </div>

      {/* navItems */}
      <div className="bg-blue-600 md:bg-blue-500">
        <div className="max-w-[1300px] mx-auto">
          <div className={`${navItemsDisplay} md:block`}>
            <NavItems setNavItemsDisplay={setNavItemsDisplay} />
          </div>
        </div>
      </div>
    </div>
  );
}
