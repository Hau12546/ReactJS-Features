// import productReducer from '../reducer/productReducer';
// const redux = require('redux');
export const initialProductState = {
	productList:[
		{id:0,title:'Lambogini',price:17,description:'Beauty on the road'},
		{id:1,title:'MH370',price:20,description:'Beauty on the sky'},
		{id:2,title:'Amerigo Vespucci',price:20,description:'Beauty on the sea'},
	],
	product:{title:null,price:0,description:null},
	boughtList:[],
}

// export const productActionType = {
// 	buy:'[Product] BUY'
// }


// const store = redux.createStore(productReducer,initialProductState);

// const getProductList = (()=>{
// 	return store.getState();
// });
// store.subscribe(getProductList);
// export default store;
