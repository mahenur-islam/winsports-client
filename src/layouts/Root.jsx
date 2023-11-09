import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Foot from "../components/Footer/Footer";
const Root = () => {
  return (
    <div className="relative">
      <Nav></Nav>
      <Outlet></Outlet>
      <Foot className="absolute bottom-0"></Foot>
    </div>
  );
};

export default Root;
