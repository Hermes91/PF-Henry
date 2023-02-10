export const CART_ADD = "cartAdd";

export function addCartProduct(payload) {
  return function (dispatch) {
    dispatch({
      type: CART_ADD,
      payload: payload,
    });
  };
}
