import { useContext } from 'react';
import { Row, Container } from 'react-bootstrap';
import DetalleProducto from '../components/DetalleProducto';
import { ProductoContext } from '../context/ProductContext';

const ProductListPage = () => {
  const { productos } = useContext(ProductoContext);

  return (
    <Container>
      <Row md={4}>
        {productos.map((producto) => (
          <DetalleProducto key={producto._id} producto={producto} />
        ))}
      </Row>
    </Container>
  );
};

export default ProductListPage;
