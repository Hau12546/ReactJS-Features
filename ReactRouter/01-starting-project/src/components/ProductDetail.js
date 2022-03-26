import { useParams } from "react-router-dom";

const ProductDetail = (()=>{
	const params = useParams();
	return (
		<>
			<h3>{params['productID'].toUpperCase()}</h3>
		</>
	)
});

export default ProductDetail; 