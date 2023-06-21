
import {
    createBrowserRouter,
  } from "react-router-dom";

import Main from "../Layout/Main";

import Home from "../Home/Home/Home/Home";
import Todos from "../Home/Home/Todos/Todos";
import ErrorPage from "../ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/todos',
            element:<Todos></Todos>
        }
      ]
    },
  ]);

export default router;