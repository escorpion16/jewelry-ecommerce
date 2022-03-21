import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShopThunk } from "../redux/action";
import { useNavigate, Link } from "react-router-dom";

const Shop = () => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.setItem("token", "");
    navigate("/login");
  };

  const shopList = useSelector((state) => state.shopList);
  const dispatch = useDispatch();

  console.log(shopList);

  useEffect(() => {
    dispatch(getShopThunk());
  }, [dispatch]);

  return (
    <div>
      <h1>Shop</h1>
      <button onClick={logOut}>Log out</button>
      <div>
        {shopList.map((shop) => (
          <Link key={shop.id} to={`/shop/${shop.id}`}>
            <div>{shop.description}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;
