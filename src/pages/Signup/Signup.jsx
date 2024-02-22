import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import validator from "validator";
import { useGetCurrentUserQuery } from "../../features/api/apiSlice";

export default function Signup() {
  // const [profileImage, setProfileImage] = useState(
  //   "https://img.freepik.com/premium-vector/art-illustration_890735-11.jpg?ga=GA1.2.1631100672.1694082200&semt=ais"
  // );

  const { data: user } = useGetCurrentUserQuery();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const profilepic = watch("profilePhoto");

  // function previewFile() {
  //   const fileInput = document.getElementById("profilePhoto");

  //   const file = fileInput.files[0];
  //   if (file) {
  //     var reader = new FileReader();

  //     reader.onload = function (e) {
  //       var imageUrl = e.target.result;
  //       setProfileImage(imageUrl);
  //       document.getElementById("fileLabel").innerHTML =
  //         "Change Profile Picture";
  //     };

  //     reader.readAsDataURL(file);
  //   }
  // }

  const onFormSubmit = async (data) => {
    // const formKeys = Object.keys(data);
    // const formData = new FormData();
    // formKeys.forEach((key) => {
    //   if (data[key]) {
    //     formData.append(key, data[key]);
    //   }
    // });


    try {
      const response = await fetch('/api/v1/user/register', {
        method: 'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(data),
      });
      const user = await response.json()
      console.log(user);
      if(user){
        window.location.href = '/'
      }
    } catch (error) {
      console.error(error);
    }
  };


  const ErrorMessage = ({ errorMessage }) => {
    return <span className="text-red-500">*{errorMessage}</span>;
  };

  // useEffect(() => {
  //   if (user) {
  //     window.location.href = "/";
  //   }
  //   previewFile();
  // }, [profilepic]);

  useEffect(()=>{
    if(user){
      window.location.href = '/'
    }
  },[])

  return (
    <>
      <div className="flex flex-col items-center px-10 bg-white">
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className="flex flex-col mb-10 ">
            <div className="text-center p-10 md:pt-10  font-bold text-3xl">
              Create A New BucketBuy Account
            </div>
           {/* <div>
               <div className="flex justify-center my-3 mt-10">
                <div className={``} id="profilePhotoPreview">
                  <img
                    src={`${profileImage}`}
                    className="h-40 w-40 rounded-full border-2 border-slate-300  object-cover"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="text-center ">
              <label
                htmlFor="profilePhoto"
                className="rounded-md p-2 px-8 cursor-pointer text-white bg-blue-500"
              >
                Browse Photos
              </label>
              <input
                type="file"
                accept="image/*"
                id="profilePhoto"
                className="w-0 opacity-0"
                {...register("profilePhoto")}
              />
            </div> */}
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
                    {...register("fullname", {
                      required: "Fullname is required!",
                    })}
                  />
                  {errors?.fullname && (
                    <ErrorMessage errorMessage={errors?.fullname?.message} />
                  )}
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
                    {...register("email", {
                      required: "Email is required!",
                      validate: (v) => validator.isEmail(v),
                    })}
                  />
                  {errors?.email && (
                    <ErrorMessage errorMessage={errors?.email?.message} />
                  )}
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
                    {...register("password", {
                      required: "Password is required!",
                      minLength: {
                        value: 6,
                        message:
                          "Password should be atleast 6 characters long!",
                      },
                    })}
                  />
                  {errors?.password && (
                    <ErrorMessage errorMessage={errors?.password?.message} />
                  )}
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
                    {...register("phoneNumber", {
                      required: "Phone Number is required!",
                      pattern: {
                        value: /^(0|91)?[6-9][0-9]{9}$/,
                        message: "Please enter a valid phone number!",
                      },
                    })}
                  />
                  {errors?.phoneNumber && (
                    <ErrorMessage errorMessage={errors?.phoneNumber?.message} />
                  )}
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
                    {...register("dob", {
                      required: "Please select your date of birth!",
                    })}
                  />
                  {errors?.dob && (
                    <ErrorMessage errorMessage={errors?.dob?.message} />
                  )}
                </div>

                {/* Select Gender */}
                <div className="flex flex-col pt-5 justify">
                  <label htmlFor="">Select Gender</label>
                  <div>
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value={"male"}
                      className="cursor-pointer"
                      {...register("gender", {
                        required: "Please select your gender!",
                      })}
                    />
                    <label htmlFor="male" className="pl-2 pr-8 cursor-pointer">
                      Male
                    </label>

                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value={"femail"}
                      className="cursor-pointer"
                      {...register("gender", {
                        required: "Please select your gender!",
                      })}
                    />
                    <label
                      htmlFor="female"
                      className="pl-2 pr-8 cursor-pointer"
                    >
                      Female
                    </label>

                    <input
                      type="radio"
                      id="others"
                      name="gender"
                      value={"others"}
                      className="cursor-pointer"
                      {...register("gender", {
                        required: "Please select your gender!",
                      })}
                    />
                    <label
                      htmlFor="others"
                      className="pl-2 pr-8 cursor-pointer"
                    >
                      Others
                    </label>
                  </div>
                  {errors?.gender && (
                    <ErrorMessage errorMessage={errors?.gender?.message} />
                  )}
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
                    {...register("streetAddress", {
                      required: "Street Address is required!",
                    })}
                  />
                  {errors?.streetAddress && (
                    <ErrorMessage
                      errorMessage={errors?.streetAddress?.message}
                    />
                  )}
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
                    {...register("apartment", {
                      required:
                        "Please enter your apartment/building/floor no.",
                    })}
                  />
                  {errors?.apartment && (
                    <ErrorMessage errorMessage={errors?.apartment?.message} />
                  )}
                </div>

                {/* State, city  */}
                <div className="flex flex-col  pt-5">
                  <div className="flex">
                    <div>
                      <label htmlFor="state">State</label>
                      <select
                        name="state"
                        id="state"
                        className="border mx-4"
                        {...register("state", {
                          required: "Please select your state!",
                        })}
                      >
                        <option value="">Select</option>
                        <option value="Delhi">Dellhi</option>
                      </select>
                      {errors?.state && (
                        <ErrorMessage errorMessage={errors?.state?.message} />
                      )}
                    </div>
                    <div>
                      <label htmlFor="city">City</label>
                      <select
                        name="city"
                        id="city"
                        className="border mx-4"
                        {...register("city", {
                          required: "Please select your city!",
                        })}
                      >
                        <option value="">Select</option>
                        <option value="New Delhi">New Delhi</option>
                      </select>
                      {errors?.city && (
                        <ErrorMessage errorMessage={errors?.city?.message} />
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col pt-3">
                  <label htmlFor="pinCode" className="py-2">
                    PIN Code
                  </label>
                  <input
                    id="pinCode"
                    type="number"
                    name="pinCode"
                    placeholder="Enter a valid pincode..."
                    className="border p-2 w-full focus:outline-slate-500 remove-arrow"
                    {...register("pinCode", {
                      required: "Please Enter a valid pincode!",
                    })}
                  />
                  {errors?.pinCode && (
                    <ErrorMessage errorMessage={errors?.pinCode?.message} />
                  )}
                </div>

                <div className="flex flex-col pt-3">
                  <input
                    id="submit"
                    type="submit"
                    value={"Create New Account"}
                    className="border p-2 w-full focus:outline-slate-500 cursor-pointer remove-arrow rounded-md bg-sky text-white font-bold"
                  />
                </div>
                <div className="pt-5">
                  <NavLink
                    className="underline hover:font-semibold"
                    to="/login"
                  >
                    Already have an account? Login
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
