import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../reducer/cartReducer";
import productSlice from "../reducer/productReducer";
const store = configureStore({
	reducer:{product:productSlice['reducer'],cart:cartSlice['reducer']}
});
export const cartAction = cartSlice.actions; 
export const productAction = productSlice.actions;
export default store;