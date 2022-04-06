import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getCategoriesThunk,
  getShopThunk,
  filterCategoryThunk,
  filterByNameThunk,
} from "../redux/action";
import styles from "../styles/shop.module.css";

const Shop = () => {
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
    <div className={styles.shopWrapper}>
      <h1>Anise</h1>

      <form onSubmit={filterByName} className={styles.form}>
        <input
          id="name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Type to search"
        />
        <button>Search</button>
      </form>

      <ul className={styles.categories}>
        {categories.map((category) => (
          <li key={category.id}>
            <button onClick={() => filterByCategory(category.id)}>
              {category.name}
            </button>
          </li>
        ))}
      </ul>

      <div className={styles.jewelContainer}>
        {shopList.map((shop) => (
          <Link key={shop.id} to={`/shop/${shop.id}`} className={styles.jewel}>
            <div className={styles.imageJewel}>
              <img src={shop.images[0].url} alt="" />
            </div>
            <h4 className={styles.detailsJewel}>{shop.name}</h4>
            <h4 className={styles.detailsJewel}>${shop.price}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;
