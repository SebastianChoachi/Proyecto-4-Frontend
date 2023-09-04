import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { VentaContext } from '../context/VentaContext';
import { AuthContext } from '../context/AuthContext';

const DetalleProducto = ({ producto, detalle }) => {
  const { agregarProductoCarrito } = useContext(VentaContext);
  const {token} = useContext(AuthContext);

  const navigate = useNavigate();

  const agregarProducto = (producto) =>{
    if(token){agregarProductoCarrito(producto)}
    else{
        navigate('/login')
    }
  };

  return (
    <Col>
    <Card style={{ width: '18rem' }} className="my-2">
      <Card.Img
        variant="top"
        src={producto.image}
      />
      <Card.Body>
        <Card.Title>
          <b>{producto.name} </b>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">${producto.price}</Card.Subtitle>
        <Card.Text>
            {producto.description}
        </Card.Text>

        {<Button variant="primary" onClick={() => navigate(`/${detalle ? '' : producto._id}`)}>
          {detalle ? 'Regresar': 'Ver'}
        </Button>}
        <span style={{ margin: '0 2%' }}></span>
        <Button
          variant="success"
          onClick={() => agregarProducto(producto)}
        >
          Comprar
        </Button>
      </Card.Body>
    </Card>
    </Col>
  );
};

export default DetalleProducto;