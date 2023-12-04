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
import PrivateRoute from "./PrivateRoute";
import BlogDetails from "../components/BlogDetails.js/BlogDetails";


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
          element: <PrivateRoute><AddBlog></AddBlog></PrivateRoute>,
        },
        {
          path: "/allblog",
          element: <AllBlogs></AllBlogs>,
          loader: ()=>fetch(`https://winsports-server.vercel.app/blogs`)
        },
        {
          path: "/blogs/:id",
          element: <UpdateBlog></UpdateBlog>,
          loader: ({params}) => fetch(`https://winsports-server.vercel.app/blogs/${params.id}`)
        },
        {
          path: "/blogs/:id/details",
          element: <BlogDetails></BlogDetails>,
          loader: ({ params }) => fetch(`https://winsports-server.vercel.app/blogs/${params.id}`)
        },
        {
          path: "/wishlist",
          element: <PrivateRoute><Wishlist></Wishlist></PrivateRoute>,
        },
        {
          path: "/featuredblog",
          element: <FeaturedBlog></FeaturedBlog>,
          loader: ()=>fetch(`https://winsports-server.vercel.app/blogs`)
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