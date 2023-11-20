import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home"
import Preview from "./pages/Preview/Preview"
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Preview></Preview>,
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);