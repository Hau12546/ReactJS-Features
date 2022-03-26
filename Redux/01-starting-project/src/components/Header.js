import classes from './Header.module.css';
import { authStore, authAction } from '../redux/counterStore';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const isLogin = useSelector((state)=>state['auth'].isAuthenticated);
  const dispatch = useDispatch();
  const logOut = (()=>{
    dispatch(authAction.signOut());
  })
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          { isLogin && <li><a href='/'>My Products</a></li>}
          { isLogin && <li><a href='/'>My Sales</a></li>}
          { isLogin && <li><button onClick={logOut}>Logout</button></li>}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
