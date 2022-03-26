import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import { useSelector } from 'react-redux';
function App() {
  const isLogin = useSelector((state)=>state['auth'].isAuthenticated);
  console.log(isLogin);
  return (
    <Fragment>
    <Header></Header>
    {!isLogin && <Auth></Auth>}
    {isLogin && <Counter/>}
    </Fragment>
  );
}

export default App;
