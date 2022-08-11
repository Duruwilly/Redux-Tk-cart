import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
 cartItems: [],
 amount: 0,
 total: 0,
 isLoading: true,
}

export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
 return fetch(url)
 .then((res) => res.json())
 .catch((err) => console.log(err));
});


const cartSlice = createSlice({
 name: 'cart',
 initialState,
 reducers: {
  clearCart: (state) => {
   state.cartItems = [];
  },

  // in this example, we want to mutate the state by performing an action so we use the action parameter. when we log the action to the console, we get access to the payload which carries the id of each item in our cart. actually because we pass in the id to the dispatch in our cartITem component hence, we get the id on the payload.
  // so we use filter on the cartItems and return the id on the cart item we filter through that doesnt match the id on the payload and if it matches, we should remove it.
  removeItem: (state, action) => {
   const itemId = action.payload;
   state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
  },
  // same with the above explanation on getting the payload id but we destructure the payload from the action instead
  // then we use the find method to find the id that is === to the payload.id and we assign it to the cartItem variable. then we get access to the amount property from our cart item using the cartItem.amount then we increment it by 1
  increase: (state, { payload }) => {
   const cartItem = state.cartItems.find((item) => item.id === payload.id);
  cartItem.amount = cartItem.amount + 1
  },
  // same with the above explanation
  decrease: (state, { payload }) => {
   const cartItem = state.cartItems.find((item) => item.id === payload.id);
  cartItem.amount = cartItem.amount - 1
  },

  // here, to get the total amount of the cart item and the total price, we first declare variable to store both the amount and the total.
  // then we iterate through the cartItems and use the forEach method and we say, for each of the cartItems, the amount should be assign to the amount variable declare. and for the total, we we multiply the amount by the price of the item.
   // and we access the amount and total on our state and assign them the amount and total variable declared
  calculateTotals: (state) => {
   let amount = 0;
   let total = 0;
   state.cartItems.forEach((item) => {
    amount += item.amount
    total += item.amount * item.price;
   })
   state.amount = amount
   state.total = total
  }
 },
 extraReducers: {
  [getCartItems.pending]:(state) => {
   state.isLoading = true
  },
  [getCartItems.fulfilled]: (state,action) => {
   state.isLoading = false
   state.cartItems = action.payload
  },
  [getCartItems.rejected]: (state) => {
   state.isLoading = false
  }
 }
});


export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions


export default cartSlice.reducer



// note: slice are the features of your application

// when we log cartSlice to the console, we got access to the reducer function so to access it we, hence the cartSlice.reducer

// so when we pass the state to the cartSlice, we have a reducer in the cartSlice that will control the state. 

// cartReducer are function that have access to the state and control the state.

// in our store, we import cartReducer


// how to access the initial state in any of the component from our slice.we use the useSelector from react-redux

// to control the state/to modify the state/to perform some kinda action on the state on any element, we used a reducers on the cartSlice and pass in the name of the action we want  and we pass in a parameter then we access the cartItem by state.cartItems = []

// then we get access to the action on the cartSlice by destructuring the clearCart from the cartSlice.actions then export it to the component we want to use it on.