import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import DetalleProducto from '../components/DetalleProducto';
//import Loader from '../components/Loader/Loader';
import { ProductoContext } from '../context/ProductContext';
import { Container } from 'react-bootstrap';

const ProductPage = () => {
  const { productos, isLoading } = useContext(ProductoContext);
  const { id } = useParams();
  const producto = productos.find((producto) => producto._id === id);
  // TODO: resolver bug
  return (
      //isLoading ? <Loader /> : <DetalleProducto producto={producto} detalle/>
      <Container>
        <DetalleProducto producto={producto} detalle/>
      </Container>
  );
};

export default ProductPage;