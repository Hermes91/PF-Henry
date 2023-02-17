import axios from "axios";
import { toast } from 'react-toastify';

export const GET_REVIEW_BY_ID = "GET_REVIEW_BY_ID"
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCT = "GET_PRODUCT";
export const SEARCH_PRODUCT = "SEARCH_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const FILTER_BY_PRICE = "FILTER_BY_PRICE";
export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY";
export const FILTER_BY_WEIGHT = "FILTER_BY_WEIGHT";
export const GET_CLEAN = "GET_CLEAN";
export const ADD_CART = "ADD_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const GET_FAVORITES = "GET_FAVORITES";
export const ADD_FAVORITES = "ADD_FAVORITES";
export const DELETE_FAVORITES = "DELETE_FAVORITES";
export const GET_ALL_USERS = "GET_ALL_USERS"


export const getProducts = () => {
  return async function (dispatch) {
    const productsResponse = await axios.get("/products");
    dispatch({ type: GET_PRODUCTS, payload: productsResponse.data });
  };
};

export const getCategories = () => {
  return async function (dispatch) {
    const categoriesResponse = await axios.get("/categories");
    dispatch({ type: GET_CATEGORIES, payload: categoriesResponse.data });
  };
};

export const getProduct = (productId) => {
  return async function (dispatch) {
    const productResponse = await axios.get(`/products/${productId}`);
    dispatch({ type: GET_PRODUCT, payload: productResponse.data });
  };
};

export const searchProduct = (searchTerm) => {
  return async function (dispatch) {
    try {
      const searchResponse = await axios.get(`/products/?name=${searchTerm}`);
      dispatch({ type: SEARCH_PRODUCT, payload: searchResponse.data });
    } catch (error) {
      console.error(error, "Product not found...");
      toast.warn('Product not found, try another name');
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
};

////////////////////////***CART ACTIONS***/////////////////////////

export const addToCart = (id) => {
  return async function (dispatch) {
    dispatch({
      type: ADD_CART,
      payload: id
    })
  }
}

export const deletCartProduct = (id) => {
  return async function (dispatch) {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: id
    })
  }
}

export function clearCart(payload) {
  return {
    type: CLEAR_CART,
    payload
  }

}

export function postUser(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post("/users", payload)
    } catch (error) {
      console.log(error.message)
    }
  }
}

export function updateUser(payload) {
  return async function () {
    try {
      axios.put("/users", payload)
        .then((data) => {
          console.log(data);
        })
    } catch (error) {
      toast.error("Your profile could not be updated, please try again later")
      console.error(error.message)
    }
  }
}


export function postFavorite(payload) {
  return async function (dispatch) {
    dispatch({
      type: ADD_FAVORITES,
      payload: payload
    })
    try {
      const response = await axios.post("/favorites", payload)
      return response
    } catch (error) {
      console.log(error)
    }
  }
}

export function getFavorites(email) {
  return async function (dispatch) {
    const productsResponse = await axios.get(`/favorites/${email}`);
    dispatch({ type: GET_FAVORITES, payload: productsResponse.data })
  }
}

export function deleteFavorites(payload) {
  return async function (dispatch) {
    dispatch({
      type: DELETE_FAVORITES,
      payload: payload
    })
    try {
      const response = await axios.delete("/favorites", { data: payload })
      return response
    } catch (error) {
      console.log(error)
    }
  }
}

export function postReview(payload) {
  return async function () {
    try {
      const response = await axios.post("/reviews", payload)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
}

export const getAllUsers = () => {
  return async function (dispatch) {
    try{
      const response = await axios.get(`/users`)
      dispatch({ type: GET_ALL_USERS, payload: response.data})
    }catch(error){
      return "User not found"
  }
  }
}

export const getReviewById = (payload) => {
  return async function (dispatch) {
    try{
      const respose = await axios.get(`/reviews/?productId=${payload}`)
      dispatch({ type: GET_REVIEW_BY_ID, payload: respose.data })
    }catch(error){
      return "Review not found"
  }
  }
}