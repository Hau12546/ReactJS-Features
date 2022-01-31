import  './UserList.css'
import UserInfo from '../UserInfo/UserInfo';
const UserList = ((props)=>{
	let ListContent = <li>No Data Found.</li>
	if(props.ParticipantList.length>0){
		ListContent = props.ParticipantList;
	}
	console.log(ListContent);
	return (
		<ul className="gradient-list">
				{ListContent.map((value,index)=>{
					return <UserInfo user={value} key={index}></UserInfo>;
				})}
		</ul>
	);
});

export default UserList;