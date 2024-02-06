import React, { useEffect, useState } from "react";
import { useGetCurrentUserQuery } from "../../features/api/apiSlice";
import { useNavigate } from "react-router-dom";

function BillingForm({shippingAddress,setShippingAddress, onOrderSubmit}) {
  const { data: user } = useGetCurrentUserQuery();
  const navigate = useNavigate();

  
  const onFormInputChange = (e) => {
  
    setShippingAddress({...shippingAddress,address:{...shippingAddress.address,[e.target.name]:e.target.value},[e.target.name]:e.target.value})
  }

  useEffect(()=>{
    if(user){
      setShippingAddress({
        address:{
          ...user.address
        }
      })
      // console.log(formData);
    }
    // Fetch information about Indian states from the Geonames API
    // fetch('http://api.geonames.org/childrenJSON?geonameId=1269750&username=aditya')
    // .then(response => response.json())
    // .then(data => {
    //   // Extract state names from the response
    //   const indianStates = data.geonames.map(state => ({
    //     name: state.adminName1,
    //     geonameId: state.geonameId
    //   }));
  
    //   // Fetch cities for each state
    //   indianStates.forEach(state => {
    //     fetch(`http://api.geonames.org/childrenJSON?geonameId=${state.geonameId}&username=aditya`)
    //       .then(response => response.json())
    //       .then(data => {
    //         const cities = data.geonames.map(city => city.name);
    //         console.log(`Cities in ${state.name}:`, cities);
    //       })
    //       .catch(error => console.error(`Error fetching cities in ${state.name}:`, error));
    //   });
    // })
    // .catch(error => console.error('Error fetching Indian states:', error));

  },[user])
  return (
    <form onSubmit={onOrderSubmit}>
      <div>
        {/* billing details */}
        <div>
          <h2 className="text-2xl font-semibold">Billing Details</h2>
        </div>

        <div className="flex flex-col my-5">
          {/* Full Name */}
          <label htmlFor="name" className="text-lg">
            Full Name
          </label>
          <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Enter your full name..."
                defaultValue={user?.fullname}
                required
                className="border focus:outline-0 p-2 my-2 text-slate-500"
                readOnly
              />
          
        </div>

        <div className="flex flex-col  my-5">
          {/* Email */}
          <label htmlFor="email" className="text-lg">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={user?.email}
            placeholder="Enter a valid email..."
            required
            className="border focus:outline-0 p-2 my-2 text-slate-500"
            readOnly
          />
        </div>

        <div className="flex flex-col my-5">
          {/* Mobile Number */}
          <label htmlFor="phoneNumber" className="text-lg">
            Phone
          </label>
          <input
            type="number"
            id="phoneNumber"
            name="phoneNumber"
            defaultValue={user?.phoneNumber}
            placeholder="Enter a valid phone number"
            className="border focus:outline-0 p-2 my-2 remove-arrow text-slate-500"
            required
            readOnly
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
            className="focus:outline-0 p-2 border"
            value={shippingAddress?.address?.country}
            onChange={onFormInputChange}
            required
          >
            <option value="">Select Country</option>
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
            defaultValue={shippingAddress?.address?.streetAddress}
            onChange={onFormInputChange}
            placeholder="Street Address..."
            className="border focus:outline-slate-300 p-2 my-2"
            required
            
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
            defaultValue={shippingAddress?.address?.apartment}
            onChange={onFormInputChange}
            placeholder="Apartment / building / house no..."
            className="border focus:outline-slate-300 p-2 my-2"
            required
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
              value={shippingAddress?.address?.city}
              onChange={onFormInputChange}
              required
            >
              <option value="">Select City</option>
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
              name="state"
              id="state"
              className="border focus:outline-0 p-1 mx-2"
              value={shippingAddress?.address?.state}
              onChange={onFormInputChange}
              required
            >
              <option value="">Select State</option>
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
              defaultValue={shippingAddress?.address?.pinCode}
              placeholder="Pincode..."
              className="border focus:outline-slate-300 w-full p-2 my-2"
              required
            />
          </div>
        </div>

        <div className="flex justify-between my-5 whitespace-nowrap">
          {/* Confirm Order Button */}
          <button
            className=" font-bold p-2 text-sm px-4 rounded-md hover:bg-red-600 hover:text-white"
            onClick={() => {
              navigate("/cart");
            }}
          >
            <i className="fa-solid fa-arrow-left"></i> Return to Cart
          </button>
          <input type="submit"  className="text-white  font-bold bg-slate-700  p-2 text-lg rounded-sm px-5 hover:bg-orange-600" value="Confirm Order" />
        </div>
      </div>
    </form>
  );
}

export default BillingForm;
