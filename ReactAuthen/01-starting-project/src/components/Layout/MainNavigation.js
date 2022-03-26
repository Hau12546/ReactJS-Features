import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classes from './MainNavigation.module.css';
import { authenActions } from '../Store/AuthenRedux';
import { useHistory } from 'react-router-dom';

const MainNavigation = () => {
  const isLogged = useSelector((state)=>state['isLoggedIn']);
  const dispatch = useDispatch();
  const routerHistory = useHistory();
  const onLogOutHandler = (()=>{
    dispatch(authenActions['loggedOut']());
    routerHistory.replace('/auth');
  });
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLogged && <li>
            <Link to='/auth'>Login</Link>
          </li>}
          {isLogged && <li>
            <Link to='/profile'>Profile</Link>
          </li>}
          {isLogged &&<li>
            <button type='button' onClick={onLogOutHandler}>Logout</button>
          </li>}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
