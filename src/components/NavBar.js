import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/navbar.module.css";

const NavBar = () => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.setItem("token", "");
    navigate("/login");
  };

  return (
    <div>
      <Link className={styles.btnMenu} to="/shop">
        Shop
      </Link>
      <Link className={styles.btnMenu} to="/cart">
        Cart
      </Link>

      <button onClick={logOut}>Log out</button>
    </div>
  );
};

export default NavBar;
