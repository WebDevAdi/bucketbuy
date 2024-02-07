import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import {
  TrackOrders,
  Cart,
  Checkout,
  Home,
  Login,
  NotFound,
  ProductPage,
  Signup,
  SearchResult,
} from "./pages/index.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";
import ProductListingPage from "./pages/ProductListingPage/ProductListingPage.jsx";
import { ProductCategories } from "./components/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "user",
        children: [
          {
            path: "orders",
            element: <TrackOrders />,
          },
        ],
      },
      {
        path: "categories",
        children: [
          {
            path: "",
            element: <ProductCategories />,
          },
          {
            path: ":category",
            element: <ProductListingPage />,
            children: [
              {
                path: ":subcategory",
                element: <ProductListingPage />,
              },
            ],
          },
        ],
      },
      {
        path: "products",

        children: [
          {
            path: ":productId",
            children: [
              {
                path: "",
                element: <ProductPage />,
              },
              {
                path: ":qty",
                children: [
                  {
                    path: "checkout",
                    element: <Checkout />,
                  },
                ],
              },
            ],
          },
          {
            path:'search',
            element:<SearchResult/>
          }
        ],
      },
      {
        path: "cart",
        children: [
          {
            path: "",
            element: <Cart />,
          },
          {
            path: "checkout",
            element: <Checkout />,
          },
        ],
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
