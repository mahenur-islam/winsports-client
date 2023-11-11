import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Foot from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";
const Root = () => {
  return (
    <div className="relative">
      <Nav></Nav>
      <Outlet></Outlet>
      <Foot className="absolute bottom-0"></Foot>
      <Toaster/>
    </div>
  );
};

export default Root;
