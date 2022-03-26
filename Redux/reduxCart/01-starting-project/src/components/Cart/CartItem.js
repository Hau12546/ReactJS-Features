import useItemPriceCalculation from '../hooks/use-itemPriceCalculation';
import classes from './CartItem.module.css';
import { useSelector } from 'react-redux';
const CartItem = (props) => {
  const {id ,title, quantity, total, price } = props.item;
  const {increment, decrement} = useItemPriceCalculation();
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button type='button' onClick={decrement.bind(this,id)}>-</button>
          <button type='button' onClick={increment.bind(this,id)}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
