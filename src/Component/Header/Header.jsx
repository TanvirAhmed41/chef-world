
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink} from "react-router-dom";
import "./Header.css"


function Header() {
  return (
    <Navbar bg="light" expand="lg" className='py-3'>
      <Container>
        <Navbar.Brand href="#"><span className='fw-bold fs-3'>Chef World</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0 menubar"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to="/" className={({isActive})=>isActive?"active":""}>Home</NavLink>
            <NavLink to="/blog"className={({isActive})=>isActive?"active":""}>Blog</NavLink>
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