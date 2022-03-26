import React from 'react';
// import { useSelector } from 'react-redux';
import {useContext} from 'react';
import { ProductContext } from '../components/Context/Product-Context';
import FavoriteItem from '../components/Favorites/FavoriteItem';
import UsedStore from '../components/hooks-store/usedStore';
import './Products.css';

const Favorites = props => {
  // const favoriteProducts = useSelector(state =>
  //   state.shop.products.filter(p => p.isFavorite)
  // );
  // const favoriteProducts = useContext(ProductContext)['products'].filter((item)=>item.isFavorite)
  const favoriteProducts = UsedStore()[0]['products'].filter((item)=>item.isFavorite)
  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map(prod => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
