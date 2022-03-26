import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import useCartList from '../hooks/use-cartList';
import { useSelector } from 'react-redux';
const Cart = (props) => {
  const cartList = useSelector((state)=> state['cart'].cartList);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {/* <CartItem
          item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
        /> */}
        {cartList.map((value,index)=>{
          return <CartItem key={index} 
          item={{id:index,title: value.title, quantity: 1, total: value.price, price: value.price}}>
          </CartItem>
        })}
      </ul>
    </Card>
  );
};

export default Cart;
