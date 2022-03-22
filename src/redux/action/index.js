import axios from "axios";
import { getConfig } from "../../utils";

export const actions = {
  setShopList: "SET_SHOP_LIST",
  setProductDetail: "SET_PRODUCT_DETAIL",
  setIsLoading: "SET_IS_LOADING",
  setCategories: "SET_CATEGORIES",
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

const setCategories = (categories) => ({
  type: actions.setCategories,
  payload: categories,
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

export const getCategoriesThunk = () => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .get(
        "https://ecommerce-exercise-backend.herokuapp.com/categories/",
        getConfig()
      )
      .then((res) => dispatch(setCategories(res.data)))
      .catch((error) => console.log(error))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const filterCategoryThunk = (id) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .get(
        `https://ecommerce-exercise-backend.herokuapp.com/products/?category=${id}`,
        getConfig()
      )
      .then((res) => dispatch(setShopList(res.data)))
      .catch((error) => console.log(error))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const filterByNameThunk = (name) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .get(
        `https://ecommerce-exercise-backend.herokuapp.com/products/?name__icontains=${name}`,
        getConfig()
      )
      .then((res) => dispatch(setShopList(res.data)))
      .catch((error) => console.log(error))
      .finally(() => dispatch(setIsLoading(false)));
  };
};
