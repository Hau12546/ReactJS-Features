// import { Navbar, Nav, NavDropdown,Container, } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import styles from './MainHeader.module.css';
const MainHeader = (()=>{
  const navigate = useNavigate();
	return (<>
		{/* <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link><NavLink to="/welcome">Welcome</NavLink></Nav.Link>
        <Nav.Link><NavLink to="/product">Product</NavLink></Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar> */}
<header className={styles['header']}>
		<nav>
			<ul>
					<li><NavLink className={(navData)=>(navData.isActive)?styles['active']:''} to="/welcome">Welcome</NavLink></li>
					<li><NavLink className={(navData)=>(navData.isActive)?styles['active']:''} to="/product">Product</NavLink></li>
			</ul>
		</nav>
</header>
	</>)
});

export default MainHeader;