import { createSlice } from "@reduxjs/toolkit";
import { initialProductState } from "../store/productStore";
// const productReducer = ((state,action)=>{
// 	switch (action.type) {
// 		case productActionType.buy:{
// 			console.log('Buy order executed');
// 			return {
// 				...state
// 			};
// 		}
// 		default:{
// 			return {
// 				...state
// 			};
// 		}
			
// 	}
// });

const productSlice = createSlice({
	name:'product',
	initialState:initialProductState,
	reducers:{
		buy(state,action){
			state['boughtList'].push(action.payload);
		}
	}
})

export default productSlice;