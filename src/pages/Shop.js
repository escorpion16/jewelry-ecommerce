import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoriesThunk,
  getShopThunk,
  filterCategoryThunk,
  filterByNameThunk,
} from "../redux/action";
import { useNavigate, Link } from "react-router-dom";

const Shop = () => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.setItem("token", "");
    navigate("/login");
  };

  const shopList = useSelector((state) => state.shopList);
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShopThunk());
    dispatch(getCategoriesThunk());
  }, [dispatch]);

  const filterByCategory = (id) => {
    dispatch(filterCategoryThunk(id));
  };

  const [search, setSearch] = useState("");

  const filterByName = (e) => {
    e.preventDefault();
    dispatch(filterByNameThunk(search));
  };

  return (
    <div>
      <h1>Shop</h1>
      <button onClick={logOut}>Log out</button>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <button onClick={() => filterByCategory(category.id)}>
              {category.name}
            </button>
          </li>
        ))}
      </ul>

      <form onSubmit={filterByName}>
        <input
          id="name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>Search</button>
      </form>

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
