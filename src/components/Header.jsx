import { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdLogout, MdShoppingBag } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { VentaContext } from '../context/VentaContext';
import Carrito from './Carrito';

const Header = () => {
  const {token} = useContext(AuthContext);
  const navigate = useNavigate();
  const { carrito } = useContext(VentaContext);
  const [openCarrito, setOpenCarrito] = useState(false);

  const onHandleOpenCarrito = () => setOpenCarrito(true);
  const onHandleCloseCarrito = () => setOpenCarrito(false);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
              {!token && <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>}
              {!token && <Nav.Link as={Link} to="/register">
                Registrarme
              </Nav.Link>}
              {token && <Nav.Link as={Link} to="/me">
                Mi Perfil
              </Nav.Link>}
              
            </Nav>
            
            {token && <Button className="botonCarrito" variant="info" onClick={onHandleOpenCarrito}>
                <MdShoppingBag /> {carrito.length}
            </Button>}
            <span style={{ margin: '0 1%' }}></span>
            {token && <Button variant='danger' onClick={()=>navigate('/logout')}>
                <MdLogout /> 
              </Button>}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <Carrito
        openCarrito={openCarrito}
        onHandleCloseCarrito={onHandleCloseCarrito}
      />
    </>
  );
};

export default Header;