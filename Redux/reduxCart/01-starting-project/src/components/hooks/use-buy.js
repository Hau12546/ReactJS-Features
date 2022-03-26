import { useDispatch } from "react-redux";
// import { productActionType } from "../redux/store/productStore";
import { cartAction, productAction } from "../redux/store/cartStore";
const useBuy = (()=>{
	const dispatch = useDispatch();
	const buyAction = ((item)=>{
		dispatch(cartAction['buy'](item));
	});

	return {
		buyAction,
	}

});

export default useBuy;