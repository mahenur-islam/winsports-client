import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Avatar, Button, Dropdown } from "flowbite-react";
import "../Nav/Navbar.css";
import useAuth from "../../hooks/useAuth";

const navLinks = [
  { to: "/", text: "Home" },
  { to: "/addblog", text: "Add Blog" },
  { to: "/allblog", text: "All Blog" },
  { to: "/updateblog", text: "Update Blog" },
  { to: "/featuredblog", text: "Featured Blog" },
];

function Nav() {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar fluid className="p-4">
        <Navbar.Brand href="https://flowbite-react.com">
          <h1 className="text-3xl font-bold italic">
            Win-<span className="text-[#053B50]">Sports</span>
          </h1>
        </Navbar.Brand>
        <div className="flex md:order-2 gap-4">
          {/* Showing Avatar */}
         {
          user?.email ? <div>
          <Dropdown
            label={
              <Avatar
                alt="User settings"
                img={user.photoURL}
                rounded
              />
            }
            arrowIcon={false}
            inline
          >
            <Dropdown.Header>
              <span className="block text-sm">{user.displayName}</span>
              <span className="block truncate text-sm font-medium">
                {user.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={logOut}>Sign out</Dropdown.Item>
          </Dropdown>
          </div> : 
          <div className="flex gap-2">
          <Button color="light">
            <NavLink to="/login">Login</NavLink>
          </Button>
          <Button color="info">
            <NavLink to="/signup">Sign Up</NavLink>
          </Button>

          </div>
         }

          {/* <Button color="light">
            <NavLink to="/login">Login</NavLink>
          </Button>
          <Button color="info">
            <NavLink to="/signup">Sign Up</NavLink>
          </Button> */}

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className="block px-4 py-2">
              {link.text}
            </NavLink>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Nav;
