import { useContext } from 'react';
//import Loader from '../components/Loader/Loader';
import { AuthContext } from '../context/AuthContext';
import { Container } from 'react-bootstrap';

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user.token)

    return (
      //isLoading ? <Loader /> : <DetalleProducto producto={producto} detalle/>
      <Container>
        <p>{user.info.name}</p>
      </Container>
  );
};

export default Profile;