import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Avatar, Button } from "flowbite-react";
import '../Nav/Navbar.css'

const navLinks = [
  { to: "/", text: "Home" },
  { to: "/addblog", text: "Add Blog" },
  { to: "/allblog", text: "All Blog" },
  { to: "/updateblog", text: "Update Blog" },
  { to: "/featuredblog", text: "Featured Blog" },
];

function Nav() {
  return (
    <div>
      <Navbar fluid className="p-4">
        <Navbar.Brand href="https://flowbite-react.com">
          <h1 className="text-3xl font-bold italic">
            Win-<span className="text-[#053B50]">Sports</span>
          </h1>
        </Navbar.Brand>
        <div className="flex md:order-2 gap-4">
          <Avatar />
          <NavLink to='/login'><Button>Login</Button></NavLink>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="block px-4 py-2"
            >
              {link.text}
            </NavLink>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Nav;
