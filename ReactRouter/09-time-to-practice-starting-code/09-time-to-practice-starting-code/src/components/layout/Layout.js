import MainNavigation from "./MainNavigation";

const Layout = ((props)=>{
	return (
		<>
		<MainNavigation></MainNavigation>
			<main>{props.children}</main>
		</>
	)
});

export default Layout;