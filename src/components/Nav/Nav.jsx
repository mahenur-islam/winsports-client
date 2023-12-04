import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Avatar, Button, Dropdown } from "flowbite-react";
import useAuth from "../../hooks/useAuth";


const navLinks = [
  { to: "/", text: "Home" },
  { to: "/addblog", text: "Add Blog" },
  { to: "/allblog", text: "All Blog" },
  { to: "/wishlist", text: "Wishlist" },
  { to: "/featuredblog", text: "Featured Blog" },
];

function Nav() {
  const { user, logOut } = useAuth();


  return (
    <div>
      <Navbar
        fluid
      >
        <Navbar.Brand href="https://flowbite-react.com">
          <h1 className="text-3xl font-bold italic">
            Win-<span className="text-[#035B50]">Sports</span>
          </h1>
        </Navbar.Brand>
        <div className="flex md:order-2 gap-4">
          {/* Showing Avatar */}
          {user?.email ? (
            <div className="flex justify-center items-center gap-2 font-semibold text-gray-500">
              <h1>{user.displayName}</h1>
              <Avatar alt="User settings" img={user.photoURL} rounded />
              <Button color="light" onClick={logOut}>
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Button color="light">
                <Link to="/login">Login</Link>
              </Button>
              <Button color="info">
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          )}

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive, isPending }) =>
                      isActive
                        ? "text-[#cc6d64] font-bold"
                        : isPending
                        ? "pending"
                        : ""
                    }
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
