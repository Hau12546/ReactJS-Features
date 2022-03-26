import { useDispatch } from "react-redux";
import { cartAction } from "../redux/store/cartStore";

const useItemPriceCalculation = (()=>{
	const dispatch = useDispatch();
	const increment = ((id)=>{
		dispatch(cartAction.increaseAmount(id));
	});

	const decrement = ((id)=>{
		dispatch(cartAction.decreaseAmount(id));
	});

	return {
		increment,
		decrement,
	}
});

export default useItemPriceCalculation;