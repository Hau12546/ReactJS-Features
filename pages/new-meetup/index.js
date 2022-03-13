import NewMeetupForm from '../../components/meetups/NewMeetupForm';
const MeetUpVenuePage = (()=>{
	const getMeetupVenueInfo = ((info)=>{
		console.log(info);
	});
	return (<>
		<NewMeetupForm onAddMeetup={getMeetupVenueInfo}></NewMeetupForm>
	</>)
});

export default MeetUpVenuePage;