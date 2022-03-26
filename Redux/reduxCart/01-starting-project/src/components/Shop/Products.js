import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const products = useSelector((state)=>state['product']['productList']);
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {/* <ProductItem
          title='Test'
          price={6}
          description='This is a first product - amazing!'
        /> */}
        {products.map((item,index)=>{
      return <ProductItem 
      key={index}
      id={index}
      title={item.title} 
      price={item.price}
      description={item.description}
      ></ProductItem>
    })}
      </ul>
    </section>
  );
};

export default Products;
