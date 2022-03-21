import axios from "axios";
import { getConfig } from "../../utils";

export const actions = {
  setShopList: "SET_SHOP_LIST",
  setProductDetail: "SET_PRODUCT_DETAIL",
  setIsLoading: "SET_IS_LOADING",
};

const setShopList = (shop) => ({
  type: actions.setShopList,
  payload: shop,
});

const setProductDetail = (product) => ({
  type: actions.setProductDetail,
  payload: product,
});

const setIsLoading = (isLoading) => ({
  type: actions.setIsLoading,
  payload: isLoading,
});

export const getShopThunk = () => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .get(
        "https://ecommerce-exercise-backend.herokuapp.com/products/",
        getConfig()
      )
      .then((res) => dispatch(setShopList(res.data)))
      .catch((error) => console.log(error))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const getProductThunk = (id) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .get(
        `https://ecommerce-exercise-backend.herokuapp.com/products/${id}/`,
        getConfig()
      )
      .then((res) => dispatch(setProductDetail(res.data)))
      .catch((error) => console.log(error))
      .finally(() => dispatch(setIsLoading(false)));
  };
};
