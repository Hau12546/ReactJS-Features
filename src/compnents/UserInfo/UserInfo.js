
import { useState } from 'react/cjs/react.development';
import './UserInfo.css';

const UserInfo = ((props)=>{
	console.log(props)
	return(
		<li>
			<div className='user'>
				<label>ID: {props.user.id}</label>
				<h3>Name: {props.user.name}</h3>
				<p>Age: {props.user.age}</p>
		</div>
		</li>
	)
});

export default UserInfo;