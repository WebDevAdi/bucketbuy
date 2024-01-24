import React from "react";
import { NavLink } from "react-router-dom";

export default function Signup() {
  return (
    <>
      <div className="flex flex-col items-center px-10 bg-white">
        <div className="flex flex-col mb-10 ">
        <div className="text-center p-10 md:pt-10  font-bold text-3xl">Create A New BucketBuy Account</div>
          <div className="flex w-full">
            <div className="hidden md:flex">
              {/* Image here */}
              <img
                src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=740&t=st=1704549482~exp=1704550082~hmac=32e89014a32b0f5fe89f00952b142ad9f1a43caf18692c235926ce89fab33e9e"
                className=""
                alt=""
              />
            </div>

            <div className="flex flex-col w-full justify-center">
              {/* inputs here */}

              {/* fullname */}
              <div className="flex flex-col">
                <label htmlFor="fullname" className="py-2">
                  Full Name
                </label>
                <input
                  id="fullname"
                  type="text"
                  name="fullname"
                  placeholder="Enter your name..."
                  className="border p-2 w-full focus:outline-slate-500"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col  pt-5">
                <label htmlFor="email" className="py-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter a valid email..."
                  className="border p-2 w-full focus:outline-slate-500"
                />
              </div>

              {/* Password */}
              <div className="flex flex-col  pt-5">
                <label htmlFor="password" className="py-2">
                  Create password
                </label>
                <input
                  id="password"
                  type="text"
                  name="password"
                  placeholder="Create a strong password..."
                  className="border p-2 w-full focus:outline-slate-500"
                />
              </div>
            </div>
          </div>

          <div className="flex w-full mt-5 md:mt-0">
            <div className="flex flex-col w-full justify-center">
              {/* inputs here */}

              {/* Mobile Number*/}
              <div className="flex flex-col">
                <label htmlFor="phoneNumber" className="py-2">
                  Mobile No.
                </label>
                <input
                  id="phoneNumber"
                  type="number"
                  name="phoneNumber"
                  placeholder="Enter a valid phone number..."
                  className="border p-2 w-full focus:outline-slate-500 remove-arrow"
                />
              </div>

              {/* Date-of-birth */}
              <div className="flex flex-col  pt-5">
                <label htmlFor="dob" className="py-2">
                  Date of Birth
                </label>
                <input
                  id="dob"
                  type="date"
                  name="dob"
                  className="border p-2 w-full focus:outline-slate-500 cursor-pointer"
                />
              </div>

              {/* Select Gender */}
              <div className="flex flex-col pt-5 justify">
                <label htmlFor="">Select Gender</label>
                <div>
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    className="cursor-pointer"
                  />
                  <label htmlFor="male" className="pl-2 pr-8 cursor-pointer">
                    Male
                  </label>

                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    className="cursor-pointer"
                  />
                  <label htmlFor="female" className="pl-2 pr-8 cursor-pointer">
                    Female
                  </label>

                  <input
                    type="radio"
                    id="others"
                    name="gender"
                    className="cursor-pointer"
                  />
                  <label htmlFor="others" className="pl-2 pr-8 cursor-pointer">
                    Others
                  </label>
                </div>
              </div>
            </div>
            <div className="hidden md:flex">
              {/* Image here */}
              <img
                src="https://erinapp.com/wp-content/uploads/2023/02/CV-of-best-candidate-in-mans-hands-flat-vector-illustration-1024x683.jpg"
                className=""
                alt=""
              />
            </div>
          </div>

          <div className="flex w-full">
            <div className="hidden md:flex mr-10 ">
              {/* Image here */}
              <img
                src="https://img.freepik.com/free-vector/vector-illustration-navigation-map-with-gps-icons_1441-361.jpg?w=740&t=st=1704552998~exp=1704553598~hmac=1281814f8e1de41344d88bae74829474c787a755e8355c33ce3bc1d89a14bc0f"
                className=""
                alt=""
              />
            </div>

            <div className="flex flex-col w-full justify-center mt-5 md:mt-0">
              {/* inputs here */}

              {/* Street Address */}
              <div className="flex flex-col">
                <label htmlFor="streetAddress" className="py-2">
                  Street Address
                </label>
                <input
                  id="streetAddress"
                  type="text"
                  name="streetAddress"
                  placeholder="Enter your street address..."
                  className="border p-2 w-full focus:outline-slate-500"
                />
              </div>

              {/* Aparment address */}
              <div className="flex flex-col  pt-5">
                <label htmlFor="apartment" className="py-2">
                  Apartment/Building/Floor No.
                </label>
                <input
                  id="apartment"
                  type="text"
                  name="apartment"
                  placeholder="Enter your apartment/building/floor..."
                  className="border p-2 w-full focus:outline-slate-500"
                />
              </div>

              {/* Password */}
              <div className="flex flex-col  pt-5">
                <div className="flex">
                  <div>
                    <label htmlFor="state">State</label>
                    <select name="state" id="state" className="border mx-4">
                      <option value="">Select</option>
                      <option value="">Dellhi</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="city">City</label>
                    <select name="city" id="city" className="border mx-4">
                      <option value="">Select</option>
                      <option value="">New Delhi</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex flex-col pt-3">
                <label htmlFor="streetAddress" className="py-2">
                  PIN Code
                </label>
                <input
                  id="streetAddress"
                  type="number"
                  name="streetAddress"
                  placeholder="Enter a valid pincode..."
                  className="border p-2 w-full focus:outline-slate-500 remove-arrow"
                />
              </div>

              <div className="flex flex-col pt-3">
                <label htmlFor="streetAddress" className="py-2">
                </label>
                <input
                  id="streetAddress"
                  type="submit"
                  name="streetAddress"
                  placeholder="Enter a valid pincode..."
                  value={'Create New Account'}
                  className="border p-2 w-full focus:outline-slate-500 remove-arrow rounded-md bg-sky text-white font-bold"
                />
              </div>
              <div className="pt-5">
                <NavLink className='underline hover:font-semibold' to='/login'>Already have an account? Login</NavLink>
              </div>
            </div>
            
          </div>

          
        </div>
      </div>
    </>
  );
}
