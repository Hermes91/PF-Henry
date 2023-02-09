import {
  GET_PRODUCTS,
  GET_PRODUCT,
  SEARCH_PRODUCT,
  CREATE_PRODUCT,
  GET_CATEGORIES,
  FILTER_BY_NAME,
  FILTER_BY_PRICE,
  FILTER_BY_CATEGORY,
  FILTER_BY_WEIGHT,
  GET_CLEAN,
  ADD_CART,
  REMOVE_1_CART,
  CLEAR_CART
} from "../actions/actionIndex.js";

export const initialState = {
  allProducts: [],
  allCategories: [],
  productDetail: [],
  filterProducts: [],
  orderedChange: false,
  buyOrder: [],
  cart: []
};


export default function reducer(state = initialState, action) {
  switch (action.type) {
    // --trae todos los productos-- //
    case GET_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        filterProducts: action.payload,
        orderedChange: !state.orderedChange
      };

    // --trae single producto by id --//
    case GET_PRODUCT:
      return {
        ...state,
        productDetail: action.payload,
      };

    // --busca por nombre --//
    case SEARCH_PRODUCT:
      return {
        ...state,
        filterProducts: action.payload,
        orderedChange: !state.orderedChange
      };

    // --crea un producto-- //
    case CREATE_PRODUCT:
      return {
        ...state, // <--------  BUSCA EL ERROR AQUI!!!!!
      };

    // --trae las categories-- //
    case GET_CATEGORIES:
      return {
        ...state,
        allCategories: action.payload,
      };

    // --filtrado alfabéticamente A-Z o Z-A-- //
    case FILTER_BY_NAME:
      const productsFilterByName =
        action.payload === "A-Z"
          ? state.filterProducts.sort((a, b) => {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
          })
          : state.filterProducts.sort((a, b) => {
            if (a.name < b.name) return 1;
            if (a.name > b.name) return -1;
            return 0;
          });

      return {
        ...state,
        filterProducts: productsFilterByName,
        orderedChange: !state.orderedChange,
      };

    // --filtrado por precio de mayor a menor y al revés-- //
    case FILTER_BY_PRICE:
      const productsFilterByPrice =
        action.payload === "minPrice"
          ? state.filterProducts.sort((a, b) => {
            if (a.price > b.price) return 1;
            if (a.price < b.price) return -1;
            return 0;
          })
          : state.filterProducts.sort((a, b) => {
            if (a.price < b.price) return 1;
            if (a.price > b.price) return -1;
            return 0;
          });

      return {
        ...state,
        filterProducts: productsFilterByPrice,
        orderedChange: !state.orderedChange,
      };

    // --filtrado por categoría-- //
    case FILTER_BY_CATEGORY:
      const copyAllProducts = state.allProducts;
      const productsFilterByCategory =
        action.payload === "Todas"
          ? copyAllProducts
          : copyAllProducts.filter((e) => e.category?.includes(action.payload));
      return {
        ...state,
        filterProducts: productsFilterByCategory,
        orderedChange: !state.orderedChange,
      };

    // --filtrado por peso-- //
    case FILTER_BY_WEIGHT:
      const productsFilterByWeight =
        action.payload === "minWeight"
          ? state.filterProducts.sort((a, b) => {
            if (a.weight > b.weight) return 1;
            if (a.weight < b.weight) return -1;
            return 0;
          })
          : state.filterProducts.sort((a, b) => {
            if (a.weight < b.weight) return 1;
            if (a.weight > b.weight) return -1;
            return 0;
          });

      return {
        ...state,
        filterProducts: productsFilterByWeight,
        orderedChange: !state.orderedChange,
      };


    // --limpia el state-- //
    case GET_CLEAN: {
      return {
        ...state,
        productDetail: action.payload,
      };
    }

    // --agrega producto al carro-- //
    case ADD_CART: {
      let newItem = state.buyOrder.find(p => p.id === action.payload);

      let itemInCart = state.cart.find(i => i.id === newItem.id)
      return itemInCart ? {
        ...state,
        cart: state.cart.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item)
      } : {
        ...state,
        cart: [...state.cart, { ...newItem, quantity: 1 }]
      }
    };

    // --quita todo del carro-- //
    case CLEAR_CART: {
      return {
        cart: []
      }
    }

    // --case default-- //
    default:
      return {
        ...state,
      };
  }
}
