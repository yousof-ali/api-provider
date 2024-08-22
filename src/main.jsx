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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
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
    <RouterProvider router={router} />
  </React.StrictMode>
);

