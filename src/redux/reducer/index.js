import { actions } from "../action";

const INITIAL_STATE = {
  shopList: [],
  productDetail: {},
  isLoading: false,
  categories: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.setShopList:
      return {
        ...state,
        shopList: action.payload,
      };
    case actions.setProductDetail:
      return {
        ...state,
        productDetail: action.payload,
      };
    case actions.setIsLoading:
      return {
        ...state,
        isLoading: action.payload,
      };
    case actions.setCategories:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
