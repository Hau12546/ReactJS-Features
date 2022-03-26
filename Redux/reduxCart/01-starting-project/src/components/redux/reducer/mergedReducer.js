import { productReducer } from "./productReducer";
import cartSlice from "./cartReducer";
import { combineReducers } from "redux";
const cartReducer = cartSlice['reducer'];
console.log(productReducer, cartReducer)
const globalreducer = combineReducers({
	productReducer,
	cartReducer
})

export default globalreducer;