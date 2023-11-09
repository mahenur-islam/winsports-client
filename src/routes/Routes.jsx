import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AddBlog from "../pages/AddBlog";
import AllBlogs from "../pages/AllBlogs";
import UpdateBlog from "../pages/UpdateBlog";
import Wishlist from "../pages/Wishlist";
import FeaturedBlog from "../pages/FeaturedBlog";
import Login from "../pages/Login";
import Signup from "../pages/Signup";


const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        }, 
        {
          path: "/addblog",
          element: <AddBlog></AddBlog>,
        },
        {
          path: "/allblog",
          element: <AllBlogs></AllBlogs>,
        },
        {
          path: "/updateblog",
          element: <UpdateBlog></UpdateBlog>,
        },
        {
          path: "/wishlist",
          element: <Wishlist></Wishlist>,
        },
        {
          path: "/featuredblog",
          element: <FeaturedBlog></FeaturedBlog>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signup",
          element: <Signup></Signup>,
        },
      ],
    },
  ]);
  
  export default routes;