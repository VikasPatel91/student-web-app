import { Nav, Container, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function NavigationBar() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>Students</Navbar.Brand>
        <Nav className="me-auto">
          <LinkContainer to={"/"}>
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to={"/login"}>
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>
          <LinkContainer to={"/sign-up"}>
            <Nav.Link>SignUp</Nav.Link>
          </LinkContainer>
          <LinkContainer to={"/Insert-Student"}>
            <Nav.Link>Insert</Nav.Link>
          </LinkContainer>

          <LinkContainer to={"/Student-Data"}>
            <Nav.Link>Data</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
