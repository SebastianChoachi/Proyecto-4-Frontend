import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { login } from "../services/auth";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const { setMyToken, setMyUser } = useContext(AuthContext);
  const navigate = useNavigate();


  const submitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const resp = await login(data)
    setMyToken(resp.token);
    setMyUser(resp);
    navigate('/');
  };

    return <>
    <Container>
    <br />    
    <h3>Login</h3>
    <br />
    <Form onSubmit={submitHandler}>
    <Form.Label>Email</Form.Label>
    <Form.Control name="email" type="email" />
    <br />
    <Form.Label>Password</Form.Label>
    <Form.Control name="password" type="password" />
    <br />
    <Button variant="primary" type="submit">
      Iniciar sesión
    </Button>
    <br /><br />
    <Link to="/register">
        ¿No tienes una cuenta?
    </Link>
  </Form>
  </Container>
  </>
}

export default LoginPage;