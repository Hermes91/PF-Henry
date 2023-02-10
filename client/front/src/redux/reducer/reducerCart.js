import { CART_ADD } from "../actions/actionCart.js";
const initialState = {
  cart: [],
};
// Store del Carrito de Compras
export default function reducerCart(state = initialState, action) {
  switch (action.type) {
    case CART_ADD:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
}
