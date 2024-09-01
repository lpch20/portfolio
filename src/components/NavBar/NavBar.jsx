import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'
import pdf from '/CV-LUCIANO PIÑEYRO-en.pdf'


function NavBar() {
  return (
<Navbar expand="lg" className="dark">
  <Container>
    <Navbar.Brand id='colorHome' href="#home">&gt;devluciano&lt;</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="https://github.com/lpch20" target='_blank'>GitHub</Nav.Link>
        <Nav.Link href="#link" href={pdf} download={"Cv_Luciano_Piñeyro"}>CV</Nav.Link>
        <Nav.Link href="https://www.linkedin.com/in/luciano-pi%C3%B1eyro-choca-40b6b71bb/">Linkedin</Nav.Link>
        <Nav.Link href="mailto:pineyroluciano@gmail.com">Email</Nav.Link> {/* Nuevo enlace de email */}
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">
            Separated link
          </NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

  );
}

export default NavBar;