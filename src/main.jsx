import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./Root/Root";
import ErrorPage from "./Pages/ErrorPage/ErrorPage"
import Country from "./Pages/Country/Country";
import About from "./Pages/About/About";
import Product from "./Pages/Product/Product";
import Home from "./Pages/Home/Home";
import ApiProvider from "./ApiProvider/ApiProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:"/country",
        element:<Country></Country>
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/product",
        element:<Product></Product>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiProvider>
        <RouterProvider router={router}></RouterProvider>
    </ApiProvider>
  </React.StrictMode>
);

