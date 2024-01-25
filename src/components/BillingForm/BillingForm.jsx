import React from 'react'
import { useGetCurrentUserQuery } from '../../features/api/apiSlice';
import { useNavigate } from 'react-router-dom';

function BillingForm() {
    const {data:user} = useGetCurrentUserQuery()
    const navigate = useNavigate()

  return (
    <div>
       {/* billing details */}
       <div>
          <h2 className="text-2xl font-semibold">Billing Details</h2>
        </div>

        <div className="flex flex-col my-5">
          {/* Full Name */}
          <label htmlFor="fullname" className="text-lg">
            Full Name
          </label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            defaultValue={user?.fullname}
            placeholder="Enter your full name..."
            className="border focus:outline-slate-300 p-2 my-2"
          />
        </div>

        <div className="flex flex-col  my-5">
          {/* Email */}
          <label htmlFor="fullname" className="text-lg">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            defaultValue={user?.email}
            placeholder="Enter a valid email..."
            className="border focus:outline-slate-300 p-2 my-2"
          />
        </div>

        <div className="flex flex-col my-5">
          {/* Mobile Number */}
          <label htmlFor="phoneNumber" className="text-lg">
            Phone
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            defaultValue={user?.phoneNumber}
            placeholder="Enter a valid phone number"
            className="border focus:outline-slate-300 p-2 my-2"
          />
        </div>

        <div className="flex flex-col my-5 ">
          {/* Country */}
          <label htmlFor="country" className="text-lg">
            Country
          </label>
          <select
            name="country"
            id="country"
            className="focus:outline-0 py-2 border"
          >
            <option value="">India</option>
            <option value="India" className="">
              India
            </option>
          </select>
        </div>

        <div className="flex flex-col my-5">
          {/* Streen Address */}
          <label htmlFor="fullname" className="text-lg">
            Street Address
          </label>
          <input
            type="text"
            id="streetAddress"
            name="streetAddress"
            placeholder="Street Address..."
            className="border focus:outline-slate-300 p-2 my-2"
          />
        </div>

        <div className="flex flex-col my-5">
          {/* Apartment */}
          <label htmlFor="apartment" className="text-lg">
            Apartment
          </label>
          <input
            type="text"
            id="apartment"
            name="apartment"
            placeholder="Apartment / building / house no..."
            className="border focus:outline-slate-300 p-2 my-2"
          />
        </div>

        <div className="flex items-center justify-between my-5">
          <div>
            {/* city */}
            <label htmlFor="city" className="text-lg">
              City
            </label>
            <select
              name="city"
              id="city"
              className="border focus:outline-0 p-1 mx-2"
            >
              <option value="">New Delhi</option>
              <option value="New Delhi" className="">
                New Delhi
              </option>
            </select>
          </div>
          <div>
            {/* state */}
            <label htmlFor="state" className="text-lg">
              State
            </label>
            <select
              name="city"
              id="state"
              className="border focus:outline-0 p-1 mx-2"
            >
              <option value="">Delhii</option>
              <option value="Delhi" className="">
                Delhi
              </option>
            </select>
          </div>
        </div>

        <div>
          <div>
            {/* pincode */}
            <label htmlFor="fullname" className="text-lg">
              Pincode
            </label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              placeholder="Pincode..."
              className="border focus:outline-slate-300 w-full p-2 my-2"
            />
          </div>
        </div>

        <div className="flex justify-between my-5 ">
          {/* Confirm Order Button */}
          <button
            className=" font-bold p-2 text-sm px-4 rounded-md hover:bg-red-600 hover:text-white"
            onClick={() => {
              navigate("/cart");
            }}
          >
            <i className="fa-solid fa-arrow-left"></i> Return to Cart
          </button>
          <button className="text-white  font-bold bg-slate-700  p-2 text-lg rounded-sm px-5 hover:bg-orange-600">
            Confirm Order
          </button>
        </div>
    </div>
  )
}

export default BillingForm
