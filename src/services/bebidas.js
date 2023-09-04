import axios from 'axios';

export const obtenerProductos = async () => {
    try {
      const data= await axios.get('http://localhost:5003/apli/v1/products'/*, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      }*/);
      console.log(data);
      console.log(data.data);
      return data.data;
    } catch (e) {
      console.error(e);
    }
  };
  
  export const crearProducto = async (productoInfo) => {
    try {
      const {
        data: { data },
      } = await axios.post(
        process.env.REACT_APP_API_URI + '/products',
        productoInfo,
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        }
      );
      return data;
    } catch (e) {
      console.error(e);
    }
  };