import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCT = "GET_PRODUCT";
export const SEARCH_PRODUCT = "SEARCH_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const FILTER_BY_PRICE = "FILTER_BY_PRICE";
export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY";
export const FILTER_BY_WEIGHT = "FILTER_BY_WEIGHT";
export const GET_CLEAN = 'GET_CLEAN';

export const getProducts = () => {
  return async function (dispatch) {
    const productsResponse = await axios.get("/products");
    dispatch({ type: GET_PRODUCTS, payload: productsResponse });
  };
};

export const getCategories = () => {
  return async function (dispatch) {
    const categoriesResponse = await axios.get("/categories");
    dispatch({ type: GET_CATEGORIES, payload: categoriesResponse });
  };
};

export const getProduct = (productId) => {
  return async function (dispatch) {
    const productResponse = await axios.get(`/products/${productId}`);
    dispatch({ type: GET_PRODUCT, payload: productResponse });
  };
};

export const searchProduct = (searchTerm) => {
  return async function (dispatch) {
    try {
      const searchResponse = await axios.get(`/products/?name=${searchTerm}`);
      dispatch({ type: SEARCH_PRODUCT, payload: searchResponse });
    } catch (error) {
      console.log("Product not found...");
      dispatch({ type: SEARCH_PRODUCT, payload: { data: [] } });
    }
  };
};

export const createProduct = (product) => {
  return async function (dispatch) {
    try {
      const response = await axios.post("/products", product);
      dispatch({ type: CREATE_PRODUCT, payload: response });
    } catch (error) {
      console.log(error.message);
      dispatch({ type: CREATE_PRODUCT, payload: { data: [] } });
    }
  };
};

export const filterByName = (productName) => {
  return async function (dispatch) {
    dispatch({
      type: FILTER_BY_NAME,
      payload: productName,
    });
  };
};

export const filterByPrice = (productPrice) => {
  return async function (dispatch) {
    dispatch({
      type: FILTER_BY_PRICE,
      payload: productPrice,
    });
  };
};

export const filterByCategory = (productCategory) => {
  return async function (dispatch) {
    dispatch({
      type: FILTER_BY_CATEGORY,
      payload: productCategory,
    });
  };
};

export const filterByWeight = (productWeight) => {
  return async function (dispatch) {
    dispatch({
      type: FILTER_BY_WEIGHT,
      payload: productWeight,
    });
  };
};

export function getClean() {
  return {
    type: GET_CLEAN,
    payload: [],
  };
}
