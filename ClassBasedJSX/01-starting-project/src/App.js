// import Users from './components/Users';
import UsersContext from './components/UsersContext';
import UsersFinder from './components/UsersFinder';
import styles from './components/UsersFinder.module.css'
const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];
function App() {
  const usersContext = {
    users:DUMMY_USERS
  }
  return (
    <UsersContext.Provider value={usersContext}>
    <div className={styles['finder']}>
      <UsersFinder  />
    </div>
    </UsersContext.Provider>
  );
}

export default App;
