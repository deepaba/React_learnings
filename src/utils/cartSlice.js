import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      const found = state.items.findIndex((ele)=>ele.card.info.id===action.payload.card.info.id);
      (found<0)?
      state.items.push(action.payload):(state.items[found].card.info.counter=1+(state.items[found].card.info.counter||1));
    },
    removeItems: (state,action) => {
      const itemIndex = state.items.findIndex((ele)=>ele.card.info.id===action.payload.card.info.id);
      const counter = state.items[itemIndex].card.info.counter;
      counter&&counter>1?state.items[itemIndex].card.info.counter--:state.items.splice(itemIndex,1);
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItems, removeItems,clearCart } = cartSlice.actions;
export default cartSlice.reducer;
