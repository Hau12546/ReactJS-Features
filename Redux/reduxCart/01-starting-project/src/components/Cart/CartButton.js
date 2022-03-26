import useCartList from '../hooks/use-cartList';
import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartAction } from '../redux/store/cartStore';
const CartButton = (props) => {
  const dispatch = useDispatch();
  const total = useSelector((state)=>state['cart']['totalQuantity']);
  const toggle = (()=>{
    dispatch(cartAction.toggleCart());
  });
  return (
    <button type='button' className={classes.button} onClick={toggle}>
      <span>My Cart</span>
      <span className={classes.badge}>{total}</span>
    </button>
  );
};

export default CartButton;
