import React from 'react';
import { useDispatch } from 'react-redux';

import Card from '../UI/Card';
import './ProductItem.css';
import {useContext} from 'react';
import { toggleFav } from '../../store/actions/products';
import { ProductContext } from '../Context/Product-Context';
import UsedStore from '../hooks-store/usedStore';
const ProductItem = React.memo((props) => {
  // const toggleFav = useContext(ProductContext)['toggleFav']
  console.log('Proudct liked')
  const dispatch = UsedStore(false)[1];
  const toggleFavHandler = () => {
    // toggleFav(props.id);
    dispatch('TOGGLE_FAV',props.id)
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
});

export default ProductItem;
