export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [
          ...state.cart,
          { ...action.payload.product, quantity: action.payload.quantity },
        ],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload.id),
      };
    case 'CLEAN_CART':
      return {
        ...state,
        cart: [],
      };
  }
};
