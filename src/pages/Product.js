import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProductThunk, filterCategoryThunk } from "../redux/action";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const productDetail = useSelector((state) => state.productDetail);

  useEffect(() => {
    dispatch(getProductThunk(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(filterCategoryThunk(productDetail.category?.id));
  }, [dispatch, productDetail]);

  const relatedProducts = useSelector((state) => state.shopList);

  console.log(productDetail);

  return (
    <div>
      <div>product component</div>
      <div>{productDetail.name}</div>
      <h3>Related Products: </h3>
      <ul>
        {relatedProducts.map((product) => (
          <Link key={product.id} to={`/shop/${product.id}`}>
            <li>{product.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Product;
