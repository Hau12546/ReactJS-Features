import { useDispatch } from 'react-redux';
import useBuy from '../hooks/use-buy';
import { cartAction } from '../redux/store/cartStore';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const { id, title, price, description, quantity } = props;
  const {buyAction:buyItem} = useBuy();
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button type='button' onClick={buyItem.bind(this,{id, title, price, description})}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
