import { createSlice, current } from "@reduxjs/toolkit";

const initialCartState = {
	cartList:[],
	showCart:false,
	totalQuantity:0,
	notification:{
		status:null,
		title:null,
		message:null
	},
	cartItem:{id:null,title:null,quantity:null,price:null, total:null}
}
const cartSlice = createSlice({
	name:'Cart',
	initialState:initialCartState,
	reducers:{
		buy(state,action){
			let existItem = state['cartList'].find((value)=>value.id === action['payload'].id);
			if(existItem){
				action['payload'].quantity+=1;
				action['payload'].total = action['payload'].price*action['payload'].quantity;
			}else{
				let newItem = JSON.parse(JSON.stringify(action['payload']));
				newItem['quantity'] = 1;
				newItem['total'] = newItem['price']*newItem['quantity'];
				state['cartList'].push(newItem);
			}
			state['totalQuantity'] = state['cartList'].length;
		},
		increaseAmount(state,action){
			let index = state['cartList'].findIndex((value)=>value.id === action['payload']);
			let existingItem = state['cartList'][index];
			existingItem.quantity+=1;
			existingItem.total = existingItem.price*existingItem.quantity;
			state['cartList'][index] = existingItem;
			state['totalQuantity'] = state['cartList'].length;
		},
		decreaseAmount(state, action){
			let index = state['cartList'].findIndex((value)=>value.id === action.payload);
			if(state['cartList'][index].quantity === 1){
				state['cartList'].splice(index,1);
				state['cartList'].forEach((value, index)=>{
					value.id = index
				});
			}else{
				state['cartList'][index].quantity-=1;
				state['cartList'][index].total = state['cartList'][index].price*state['cartList'][index].quantity;
			}
			state['totalQuantity'] = state['cartList'].length;
		},
		toggleCart(state){
			state.showCart = !state.showCart;
		},
		updateMessage(state,action){
			state['notification']['status'] = action['payload']['status'];
			state['notification']['title'] = action['payload']['title'];
			state['notification']['message'] = action['payload']['message'];
		}
	}
});

export default cartSlice;
