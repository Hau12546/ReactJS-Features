import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
import usePutHttp from './components/hooks/use-put';
import { useEffect } from 'react';
function App() {
  const isDisplayed = useSelector((state)=>state['cart']['showCart']);
  const cartList = useSelector((state)=>state['cart']['cartList']);
  const notify = useSelector((state)=>state['cart']['notification']);
  console.log(notify);
  const {sendData} = usePutHttp();
  useEffect(()=>{
    sendData({body:cartList});
  },[cartList])
  return (
    <Layout>
     {isDisplayed &&  <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
