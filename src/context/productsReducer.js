export const productsReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return {
        ...state,
        products: [
          ...state.products,
          { productId: action.payload.productId, ...action.payload.product },
        ],
      };
    case 'LOADING':
      return {
        ...state,
        loading: action.payload.isLoading,
      };
    case 'LOADED':
      return {
        ...state,
        loading: action.payload.isLoading,
      };
    default:
      return state;
  }
};
