import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
function NavigationBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className='nav'>
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Navbar.Brand>
            <Nav.Link as={Link} to="/"><img src={logo} alt="brand_logo"/></Nav.Link>
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;