
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink} from "react-router-dom";


function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">Chef World</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link to="/blog">Blog</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Link to="/login">
                <button className="btn btn-success">Log In</button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;