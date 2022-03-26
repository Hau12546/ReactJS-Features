import { NavLink } from "react-router-dom";
import {ListGroup, Badge} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

const Product = (()=>{
	const productList = [
		{imgLink:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80',
		 title:'HeadPhone', 
			visitLink:`/productDetail/${'HeadPhone'}`
		},
		{imgLink:'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8&w=1000&q=80',
		 title:'Smart Watch', 
			visitLink:`/productDetail/${'Smart Watch'}`
		},
		{imgLink:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8&w=1000&q=80',
		 title:'Nikes', 
			visitLink:`/productDetail/${'Nikes'}`
		},
		{imgLink:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBJ6bye0l0IPuvRewXTqSUVL-ekJWmvua-6Lt7V-ag8B8KQnORYiIHE2zgmMRTOPEQ_54&usqp=CAU',
		 title:'Long Sleeves Shirt', 
			visitLink:`/productDetail/${'Long Sleeves Shirt'}`
		},
	]
	return (	<>
			<h3>
    Available Products <Badge bg="secondary">{productList.length}</Badge>
  </h3>
		<ListGroup>
		{productList.map((value,index)=><ListGroup.Item key={index}><NavLink to={`/productDetail/${value['title'].toLowerCase()}`}>{value['title']}</NavLink></ListGroup.Item>)}
</ListGroup>
	</>)
});

export default Product;