import React from 'react';
import {useState} from 'react'
import { initialState } from '../../store/reducers/products';
export const ProductContext = React.createContext({
	products:[],
	toggleFav: (id)=>{}
});

export default (props)=>{
	const [productList, setProductList] = useState(initialState['products']);
	const getFavouriteProducts = ((productId)=>{
		setProductList((preState)=>{
			const prodIndex = preState.findIndex(
				p => p.id === productId
		);
			const newFavStatus = !preState[prodIndex].isFavorite;
  	const updatedProducts = [...preState];
			updatedProducts[prodIndex] = {
				...preState[prodIndex],
				isFavorite: newFavStatus
		};
			return updatedProducts;
		})
	});
		return (<>
			<ProductContext.Provider value={{products: productList, toggleFav:getFavouriteProducts}}>
				{props.children}
			</ProductContext.Provider>
		</>)
}