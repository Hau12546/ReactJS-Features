import { Fragment, useState, useEffect } from 'react';
import styles from './UsersFinder.module.css'
import Users from './Users';
import { Component } from 'react/cjs/react.production.min';
import UsersContext from './UsersContext';
const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];



class UsersFinder extends Component{
	static context = UsersContext
	constructor(){
		super();
		this.state={
			filteredUsers:[],
			searchTerm:'',
		};
	}
	componentDidMount(){
		this.setState({filteredUsers: DUMMY_USERS});
	}

	componentDidUpdate(preProps,preState){
		if(preState.searchTerm !== this.state['searchTerm'] )
		{
			this.setState({
				filteredUsers:this.state['filteredUsers'].filter((user) => user.name.includes(this.state['searchTerm'])),
			});	
		}
	}
	searchChangeHandler(event){
		this.setState({searchTerm: event.target.value});
	}
	render(){
		return (
			<Fragment>
					<input  type='search' onChange={this.searchChangeHandler.bind(this)} />
					<Users users={this.state['filteredUsers']} />
			</Fragment>
	);
	}

}


// const UsersFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <input  type='search' onChange={searchChangeHandler} />
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UsersFinder;