import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Foot from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="flex-1">
        <Outlet />
      </div>
      <Foot />
      <Toaster />
    </div>
  );
};

export default Layout;
