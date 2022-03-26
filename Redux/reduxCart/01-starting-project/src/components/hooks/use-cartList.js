import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useCartList = (()=>{
	const [cartList, setList] = useState([]);
	const list = useSelector((state)=>state['cart']['cartList']);
	setList(list);
	return {
		cartList:cartList,
	}
});

export default useCartList;