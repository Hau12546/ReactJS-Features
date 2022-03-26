import { Outlet, Route, Routes } from "react-router-dom";

const Welcome = (()=>{
	return(
	<h3>
			Welcome
			<Outlet></Outlet>
			{/* <Routes>
			<Route path="new" element={<p>Welcome New User (^__^)</p>}></Route>
			</Routes> */}
	</h3>)
});

export default Welcome;