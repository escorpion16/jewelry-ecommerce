import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductThunk } from "../redux/action";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductThunk(id));
  }, [dispatch, id]);

  const productDetail = useSelector((state) => state.productDetail);

  console.log(productDetail);

  return <div>product component</div>;
};

export default Product;
