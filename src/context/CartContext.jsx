import React, { createContext, useReducer } from 'react';
import { cartReducer } from './cartReducer';

export const CartContext = createContext();

const initialState = {
  cart: [],
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const isInCart = (productId) => {
    return state.cart.some((product) => product.id === productId);
  };
  const onAdd = (product, quantity) => {
    if (!isInCart(product.id)) {
      dispatch({
        type: 'ADD_TO_CART',
        payload: {
          product,
          quantity,
        },
      });
    } else {
      return;
    }
  };
  const onRemoveItem = (productId) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        id: productId,
      },
    });
  };
  const clearCart = () => {
    dispatch({
      type: 'CLEAN_CART',
    });
  };
  return (
    <CartContext.Provider
      value={{ ...state, onAdd, onRemoveItem, clearCart, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
