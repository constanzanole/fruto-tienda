import React, { createContext, useReducer } from 'react';
import { db } from '../firebase';
import { productsReducer } from './productsReducer';

export const ProductsContext = createContext();

const initialState = {
  products: [],
  loading: false,
};

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);
  const fetchProducts = async () => {
    dispatch({
      type: 'LOADING',
      payload: {
        isLoading: true,
      },
    });
    try {
      const items = await db.collection('Items').get();

      items.forEach((item) => {
        dispatch({
          type: 'FETCH_PRODUCTS',
          payload: {
            productId: item.id,
            product: item.data(),
          },
        });
      });

      dispatch({
        type: 'LOADED',
        payload: {
          isLoading: false,
        },
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: 'LOADED',
        payload: {
          isLoading: false,
        },
      });
    }
  };
  return (
    <ProductsContext.Provider value={{ ...state, fetchProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
