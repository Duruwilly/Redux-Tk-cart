import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/CartSlice';
import modalReducer from './features/cart/modal/ModalSlice';


// the key name cart in the reducer can be named anything. then we pass in the cartReducer function that will control our state.

// when we are trying to acccess the state, we would need the key named which is the cart in this case.. for instance ... state.cart

export const store = configureStore({
 reducer: {
  cart: cartReducer,
  modal: modalReducer,
 }
});




// note: slice are the features of your application

// cartReducer are function that get access to the state and control the state.