import './App.css';
import { useContext, useEffect } from 'react';
import ProductListPage from './pages/ProductList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { AuthContext } from './context/AuthContext';
import LogoutPage from './pages/LogoutPage';
import ProductPage from './pages/ProductPage';
import Profile from './pages/Profile';

function App() {
  
  const { token, setMyToken } = useContext(AuthContext);

  useEffect(() => {
    setMyToken(
      localStorage.getItem('token') ? localStorage.getItem('token') : null
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header></Header>
        <Routes>
        <Route path="/" element={<ProductListPage />} />
        {token && <Route element={<ProductPage />} path="/:id" />}
        {!token && <Route path="/register" element={<RegisterPage />} />}
        {!token &&<Route path="/login" element={<LoginPage />} />}
        {token &&<Route path="/logout" element={<LogoutPage />} />}  
        {token &&<Route path="/me" element={<Profile />} />}
        </Routes>
      
    </>
  );
}

export default App;
