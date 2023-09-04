import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { useContext, useEffect } from 'react';
import { VentaContext } from '../context/VentaContext';
import { useNavigate } from 'react-router-dom';

const ButtonsPayPal = ({ showSpinner, amount }) => {
  const { obtenerProductoObjeto, clearCarrito } = useContext(VentaContext);
  const style = { layout: 'vertical' };
  const [{ isPending }] = usePayPalScriptReducer();
  const navigate = useNavigate();

  const mapearProductos = () => {
    const productoObjeto = obtenerProductoObjeto();

    return Object.entries(productoObjeto).map(([idProducto, productos]) => ({
      producto: idProducto,
      cantidad: productos.length,
      precioUnitario: productos[0].precio,
    }));
  };

  const refrescarPagina = async () => {
    // Mostrar una alerta
    alert("Compra Exitosa!");
    if (true) {
      await new Promise(resolve => setTimeout(resolve, 3000)); 
      //useEffect(()=>{
          clearCarrito();
      //}, []);
      navigate('/');
    }
  }

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[style]}
        fundingSource={undefined}
        createOrder={async (data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          console.log({data})
          return actions.order.capture().then(function () {
            refrescarPagina();

          });
        }}
      />
    </>
  );
};

export default ButtonsPayPal;