import React from 'react';
// import { useSelector } from 'react-redux';
import {ProductContext} from '../components/Context/Product-Context'
import {useContext} from 'react'
import UsedStore from '../../src/components/hooks-store/usedStore'
import ProductItem from '../components/Products/ProductItem';
import './Products.css';

const Products = (props) => {
  const productList = UsedStore()[0].products;
  // const productList = useContext(ProductContext)['products']
  // const productList = useSelector(state => state.shop.products);
  return (
    <ul className="products-list">
      {productList.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
