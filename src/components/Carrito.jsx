import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { VentaContext } from '../context/VentaContext';
import ButtonsPayPal from './ButtonsPayPal';

const Carrito = ({ openCarrito, onHandleCloseCarrito }) => {
  const {
    carrito,
    eliminarProductoCarrito,
    agregarProductoCarrito,
    obtenerProductoObjeto,
  } = useContext(VentaContext);

  const mapearCarrito = () => {
    const productoObjeto = obtenerProductoObjeto();
    return Object.entries(productoObjeto).map(([idProducto, productos]) => (
      <li className="itemcarrito" key={idProducto} >
        <p><b>{productos[0].name}</b>  ${productos[0].price}</p>
        <Button className="rounded-pill"
          size="sm"
          variant="danger"
          onClick={() => eliminarProductoCarrito(idProducto)}
        >
          <AiOutlineMinus />
        </Button>
        
        {productos.length}
        
        <Button className="rounded-pill"
          size="sm"
          variant="success"
          onClick={() => agregarProductoCarrito(productos[0])}
        >
          <AiOutlinePlus />
        </Button>
      </li>
    ));
  };

  const mostrarCarrito = () => {
    if (carrito.length) {
      return mapearCarrito();
    }
    return (
    <div>
        <h5>Carrito vacío</h5>
        <img src="./prueba.png" alt="mi carrito" style={{ maxWidth: '80%', height: 'auto' }}/>
    </div>);
  };

  return (
    <Offcanvas show={openCarrito} onHide={onHandleCloseCarrito} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Carrito de Compras</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div>
        <ul>{mostrarCarrito()}</ul>
        </div>
        
        {carrito.length && <ButtonsPayPal
          amount={carrito.reduce((acc, next) => acc + next.price, 0)}
        />}
        
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Carrito;