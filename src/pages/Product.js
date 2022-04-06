import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProductThunk, filterCategoryThunk } from "../redux/action";
import styles from "../styles/product.module.css";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [itemQuantity, setItemQuantity] = useState(1);

  const productDetail = useSelector((state) => state.productDetail);

  useEffect(() => {
    dispatch(getProductThunk(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(filterCategoryThunk(productDetail.category?.id));
  }, [dispatch, productDetail]);

  const relatedProducts = useSelector((state) => state.shopList);

  const quantityCart = () => {
    console.log(itemQuantity);
  };

  return (
    <div className={styles.productWrapper}>
      <div className={styles.mainProduct}>
        <div className={styles.mainImageJewel}>
          {/* <img src={productDetail.images[0].url} alt="" /> */}
        </div>
        <div className={styles.detailsMainProduct}>
          <h4>{productDetail.name}</h4>
          <h4>${productDetail.price}</h4>
          <p>{productDetail.description}</p>

          <div className={styles.shoppingContainer}>
            <h3>Quantity</h3>
            <div className={styles.quantity}>
              <button
                onClick={() => {
                  if (itemQuantity > 1) {
                    setItemQuantity(itemQuantity - 1);
                  }
                }}
              >
                Less
              </button>
              <div className={styles.quantityNumber}>{itemQuantity}</div>
              <button onClick={() => setItemQuantity(itemQuantity + 1)}>
                More
              </button>
            </div>
            <button
              className={styles.btnAddToCart}
              onClick={() => quantityCart(itemQuantity)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <h3> Our Jewels </h3>

      <div className={styles.relatedProducts}>
        {relatedProducts.map((product) => (
          <Link
            key={product.id}
            to={`/shop/${product.id}`}
            className={styles.relatedJewel}
          >
            <div className={styles.imageJewel}>
              <img src={product.images[0].url} alt="" />
            </div>
            <h4 className={styles.detailsJewel}>{product.name}</h4>
            <h4 className={styles.detailsJewel}>${product.price}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Product;
