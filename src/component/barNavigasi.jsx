import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './barNavigasi.scss'
import SearchBar from './searchBar'

function barNavigasi() {
  return (
    <>
      <Navbar className='navigasi' bg="white" data-bs-theme="light" sticky="top">
        <Container className='container'>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#all_product">All Product</Nav.Link>
            <Nav.Link href="#features">Profil Suhuf</Nav.Link>
            <Nav.Link href="#pricing">Contact Person</Nav.Link>
            <Nav.Link href="#pricing">Login</Nav.Link>
            <Nav ><SearchBar/></Nav>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default barNavigasi;