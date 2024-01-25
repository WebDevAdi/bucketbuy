import React from "react";
import Logo from "../Logo/Logo";

export default function Footer() {
  return (
    <footer className="">
      <div className="flex flex-col text-white bg-blue-900">
        <div className="flex flex-col sm:flex-row md:px-40 justify-around">
          <div className="flex justify-center sm:justify-start px-5 py-10 space-y-10 text-center md:text-left">
            <div className="" style={{ width: "180px" }}>
              <Logo />
            </div>
          </div>
          <div className="flex flex-col py-10 px-5 text-center md:text-left">
            <div className="pb-10 text-2xl font-extrabold">Shop</div>
            <div className="">
              <a href="/">Hot deals</a>
            </div>
            <div className="">
              <a href="/">Categories</a>
            </div>
            <div className="">
              <a href="/">Brands</a>
            </div>
            <div className="">
              <a href="/">Rebates</a>
            </div>
            <div className="">
              <a href="/">Weekly deals</a>
            </div>
          </div>
          <div className="flex flex-col py-10 px-5 text-center md:text-left">
            <div className="pb-10 text-2xl font-extrabold">Need Help?</div>
            <div className="">
              <a href="/">Contact</a>{" "}
            </div>
            <div className="">
              <a href="/">Order tracking</a>
            </div>
            <div className="">
              <a href="/">FAQs</a>
            </div>
            <div className="">
              <a href="/">Return Policy</a>
            </div>
            <div className="">
              <a href="/">Privacy Policy</a>
            </div>
          </div>
          <div className="flex flex-col py-10 px-5 text-center md:text-left">
            <div className="pb-10 text-2xl font-extrabold">Contact</div>
            <div className="">123 Fifth Avenue, New York, NY</div>
            <div className="">10160</div>
            <div className="">
              <a href="/">contact@info.com</a>{" "}
            </div>
            <div className="">929-242-6868</div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-around py-10   bg-slate-800">
          <div className="text-center mb-10 sm:mb-0">
            © 2024 Electronic Store. Powered by Electronic Store
          </div>
          <div className="flex justify-around text-white text-2xl">
            <i className="px-5 fa-brands fa-facebook"></i>
            <i className="px-5 fa-brands fa-instagram"></i>
            <i className="px-5 fa-brands fa-youtube"></i>
            <i className="px-5 fa-brands fa-twitter"></i>
            <i className="px-5 fa-brands fa-pinterest"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}
