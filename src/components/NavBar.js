import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.setItem("token", "");
    navigate("/login");
  };

  return (
    <div>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart</Link>

      <button onClick={logOut}>Log out</button>
    </div>
  );
};

export default NavBar;
