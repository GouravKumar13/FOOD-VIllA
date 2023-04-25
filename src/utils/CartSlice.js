import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    removeItems: (state, action) => {
      state.items.pop();
    },
  },
});

export const {addItem , removeItems ,clearCart} = CartSlice.actions;
export default CartSlice.reducer;
