import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import validator from "validator";
import { useGetCurrentUserQuery, useLoginUserMutation } from "../../features/api/apiSlice";

export default function Login() {
  let [eyeIcon, setEyeIcon] = useState("fa-eye-slash");
  let [error, setError] = useState(null);
  const {data:user} = useGetCurrentUserQuery()
  if(user){
    window.location.href= '/'
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const passwordField = useRef(null);
  const navigate = useNavigate();

  const [loginUser, { isLoading, isSuccess, isError }] = useLoginUserMutation();

  const toggleShowPassword = () => {
    if (passwordField.current.type === "password") {
      passwordField.current.type = "text";
      setEyeIcon("fa-eye");
    } else {
      passwordField.current.type = "password";
      setEyeIcon("fa-eye-slash");
    }
  };

  const handleLogin = async (loginCredentials) => {
    try {
      const response = await loginUser(JSON.stringify(loginCredentials));
      console.log(response);
      if(response.error){
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 3000);
        return null
      }
      
      window.location.href = '/'
    } catch (error) {
      console.error(error);
      
      return null;
    }
  };

  return (
    <>

      {
        !user && <div className="flex justify-center py-14 md:p-20 relative bg-white">
        <div
            className={`${
              error ? "flex" : "hidden"
            } mt-2 justify-center absolute top-0 w-40`}
          >
            <div className=" bg-slate-500  font-bold p-2 rounded-sm w-fit text-white">
              Invalid Credentials !
            </div>
          </div>
          <div className="flex items-center px-10 md:px-0 ">
            <div className="hidden md:flex">
              {/* Image */}
              <img
                className=" "
                src="https://img.freepik.com/free-vector/purchasing-habits-abstract-concept_335657-2995.jpg?ga=GA1.1.1631100672.1694082200&semt=sph"
                alt=""
              />
            </div>
            <div className="flex flex-col md:my-0">
              <h1 className="font-bold text-3xl pb-5">
                Welcome Back. Please Log In To Your Account.
              </h1>
  
              <form
                className="flex flex-col items-start"
                onSubmit={handleSubmit(handleLogin)}
              >
                {/* user email */}
                <div className="flex flex-col mt-8 w-full">
                  <label htmlFor="email" className="">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="border rounded-md p-2 w-full focus:outline-slate-500"
                    required
                    {...register("email", {
                      validate: (v) => validator.isEmail(v),
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500">*Please enter a valid email!</p>
                  )}
                </div>
  
                {/* user password */}
  
                <div className="flex flex-col mt-8 w-full relative">
                  <label htmlFor="password" className="">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="password"
                    className="border rounded-md p-2 w-full focus:outline-slate-500"
                    ref={passwordField}
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <p className="text-red-500">*This field cannot be empty!</p>
                  )}
                  <span
                    className="cursor-pointer opacity-80 absolute right-4 top-8"
                    onClick={toggleShowPassword}
                  >
                    <i className={`fa-solid ${eyeIcon}`}></i>
                  </span>
                </div>
  
                {/* remember me checkbox */}
  
                <div className="w-full flex justify-between mt-8">
                  <div className="flex">
                    <input
                      type="checkbox"
                      name="stayLoggedIn"
                      id="stayLoggedIn"
                      className="cursor-pointer"
                      {...register("rememberMe")}
                    />
                    <label
                      htmlFor="stayLoggedIn"
                      className="px-2 cursor-pointer hover:font-semibold"
                    >
                      Remember Me
                    </label>
                  </div>
  
                  <div className="text-red-500 text-bold cursor-pointer hover:underline hover:font-semibold">
                    Forgot Password?
                  </div>
                </div>
  
                {/* submit button */}
                <input
                  type="submit"
                  value={`${isLoading ? "...Loading Please Wait" : "Login"}`}
                  className="w-full bg-sky rounded-xl p-3 mt-8 text-white font-bold cursor-pointer"
                />
              </form>
              <div className="py-4 underline cursor-pointer">
                <NavLink className="hover:font-semibold" to="/signup">
                  Don't have an account? Create new account
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}
