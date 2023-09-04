import 'bootstrap/dist/css/bootstrap.min.css';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ProductoProvider } from './context/ProductContext'; 
import { VentaProvider } from './context/VentaContext';
import { AuthProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     <AuthProvider>
        <VentaProvider>
          <ProductoProvider>
            <PayPalScriptProvider
              options={{
                clientId:
                  'ARZ35Wqh3p1ae86M-PGjJM2g1kc6Nb9QcuW3l7NxJNKgubOtOhds6gULjQ-rw-Vsd_ThRt6vgOtel5Jc',
                components: 'buttons',
                currency: 'MXN',
              }}
            >
              <App />
            </PayPalScriptProvider>
          </ProductoProvider>
        </VentaProvider>
      </AuthProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
