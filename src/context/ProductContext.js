import { createContext, useContext, useEffect, useState } from 'react';
import { obtenerProductos } from '../services/bebidas';
//import { AuthContext } from './AuthContext';

export const ProductoContext = createContext();

const { Provider } = ProductoContext;

export const ProductoProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //const { token } = useContext(AuthContext);

  useEffect(() => {
    const getProductos = async () => {
      setIsLoading(true);
      const resp = await obtenerProductos();
      if (resp) {
        setProductos(resp);
      }
      setIsLoading(false);
    };
    getProductos();
  }, []);

  return <Provider value={{ productos, isLoading }}>{children}</Provider>;
};