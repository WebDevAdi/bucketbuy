import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "./components/index.jsx";
import { useEffect } from "react";
import { useGetCurrentUserQuery } from "./features/api/apiSlice.js";


function Layout() {

  let {data:user} = useGetCurrentUserQuery()

  return (
    <>
    <Navbar/>
      <div className="max-w-[1400px] mx-auto px-2 md:px-10">
         <Outlet/>
      </div>
    <Footer/>
    </>
  )
}

export default Layout
