import React from "react";
import { useTrackOrdersQuery } from "../../features/api/apiSlice";
import { useNavigate } from "react-router-dom";

function TrackOrders() {
  const { data: orders } = useTrackOrdersQuery();
  const navigate = useNavigate();
  console.log(orders);
  return (
    <div className="p-5 m-3 rounded-xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Your Orders</h1>
      {orders &&
        orders?.map((order,index) => (
          <div className="bg-white p-5" key={order?._id}>
            <div className="">
              <h1 className="text-2xl font-bold mb-5">
                <span>{index+1})</span> Order Id : {order?._id}
              </h1>
              <p className="my-2 font-semibold">
                Order Placed On : {new Date(order?.createdAt).toDateString()},{" "}
                {new Date(order?.createdAt).toLocaleTimeString()}
              </p>
              <p className="my-2 font-semibold">
                Order Status :{" "}
                <span
                  className={`text-sm  p-1 px-2 rounded-md text-slate-900 ${
                    order?.status === "PENDING" ? "bg-orange-500" : "bg-red-500"
                  }`}
                >
                  {order?.status}
                </span>
              </p>
              <p className="my-2 font-semibold">
                Delivery Charges : <i className="fa-solid fa-inr text-sm"></i>{" "}
                {order?.deliveryCharges}
              </p>
              <p className="my-2 font-semibold">
                Total Amount : <i className="fa-solid fa-inr text-sm"></i>{" "}
                {order?.totalAmount}
              </p>
            </div>

            <div className="my-6">
              <h3 className="text-xl font-semibold">Ordered Items</h3>
            </div>

            <div>
              {/* looping all the products in the order */}

              {order &&
                order?.products?.map((product) => (
                  <div
                    className="flex flex-col md:flex-row border  p-4 rounded-md my-5"
                    key={product?._id}
                  >
                    <div className="flex justify-center ">
                      <div className="w-40 flex h-fit md:mx-3 ">
                        {/* img */}
                        <img
                          src={product?.product?.productImages[0]}
                          alt=""
                          className="h-full w-full object-contain"
                        />
                      </div>
                    </div>
                    <div className="w-full"> 
                      <div className="font-bold text-lg ">
                        {/* title */}
                        {product?.product?.title}
                      </div>
                      <div className="px-2">
                        <div className="flex justify-between p-2">
                          <div>Quantity : </div>
                          <div>{product?.quantity}</div>
                        </div>
                        <div className="flex justify-between border-t p-2">
                          <div>Ordered Price</div>
                          <div>&#8377; {product?.orderPrice}</div>
                        </div>
                        <div className="flex justify-between border-t p-2">
                          <div>Subtotal</div>
                          <div>&#8377; {product?.subtotal}</div>
                        </div>
                      </div>
                      <div className="flex justify-end my-3">
                        <button
                          className="bg-blue-500 rounded-sm text-white font-bold px-5 py-1"
                          onClick={() => {
                            navigate(`/products/${product?.product?._id}`);
                          }}
                        >
                          View Product
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
}

export default TrackOrders;
