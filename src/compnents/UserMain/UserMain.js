import { useState } from 'react';
import Wrapper from '../Helpers/wrapper';
import UserForm from '../UserForm/UserForm';
import UserList from '../UserList/UserList';
import  './UserMain.css';

const UserMain = ((props)=>{
	let UserData =[{id:1,name:'test',age:'30'}];
	const [UpdatedList, updateList] = useState(UserData); 

	const ReceiveUser = ((userInfo)=>{
		updateList((prestate)=>{
			return [userInfo,...prestate]
		});
	});
	return(
		// <Wrapper className='main'>
		// <UserForm AddUser={ReceiveUser}></UserForm>
		// <UserList ParticipantList={UpdatedList}></UserList>
		// </Wrapper>
				<div className='main'><UserForm AddUser={ReceiveUser}></UserForm>
				<UserList ParticipantList={UpdatedList}></UserList></div>
	)
});

export default UserMain;