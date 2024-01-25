import React from "react";
import {
  resetUserApiState,
  useGetCurrentUserQuery,
  useLogoutUserMutation,
} from "../../features/api/apiSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function UserProfile() {
  const { data: user, refetch } = useGetCurrentUserQuery();
  const [logoutUser] = useLogoutUserMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleUserLogout = async () => {
    try {
      const reponse = await logoutUser();
      dispatch(resetUserApiState());
      window.location.href = '/'
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="">
        <div className=" bg-red-500 ">
          <div className="flex items-center text-white font-bold bg-blue-900 h-12 relative">
            <span className="absolute right-9 -top-2.5 rotate-45 h-5 w-5 bg-blue-900 border-t border-l border-white"></span>
          </div>
          <div className="flex flex-col absolute top-1 w-full ">
            {/* profilePhoto */}
            <div className="flex justify-center">
              <div className="h-20 w-20 rounded-full bg-black border border-white ">
                {" "}
              </div>
            </div>
            {/* username */}
            <div className="text-xl text-center mt-2 font-semibold">
              {user?.fullname}
            </div>
            {/* email */}
            <div className="text-sm text-center ">
              <i className="fa-solid fa-envelope"></i> {user?.email}
            </div>
            {/* phone */}
            <div className="text-sm text-center mb-2">
              <i className="fa-solid fa-phone"></i> {`+91 ${user?.phoneNumber}`}
            </div>

            <hr />

            {/* main options */}
            <div>
              {/* account setting */}
             <NavLink>
             <div className="p-2 hover:bg-blue-900 hover:text-white">
                <i className="fa-solid fa-gear"></i>{" "}
                <span>Account Setting</span>
              </div>
             </NavLink>

              {/* user cart */}
              <NavLink to={'/cart'}>
              <div className="p-2 hover:bg-blue-900 hover:text-white">
                <i className="fa-solid fa-cart-shopping"></i>{" "}
                <span> View Cart</span>
              </div>
              </NavLink>

              {/* track orders */}
             <NavLink>
             <div className="p-2 hover:bg-blue-900 hover:text-white">
                <i className="fa-solid fa-gift"></i> <span> Track Orders</span>
              </div>
             </NavLink>

              {/* payment methods */}
             <NavLink>
             <div className="p-2 hover:bg-blue-900 hover:text-white">
                <i className="fa-solid fa-credit-card"></i>{" "}
                <span> Payment Methods</span>
              </div>
             </NavLink>

              <hr />
              {/* logout button */}
             <NavLink>
             <div
                className="p-2 hover:bg-blue-900 hover:text-white"
                onClick={handleUserLogout}
              >
                <i className="fa-solid fa-right-from-bracket"></i>
                <span>Log Out</span>
              </div>
             </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
