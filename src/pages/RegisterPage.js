import React from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/auth';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    if(data.password !== data.confirmPassword){
      alert('Contraseñas no coinciden')
      return;
    }

    const resp = await register(data);

    console.log(resp);

    navigate('/login');
  };

  return (
    <>
      <Container>
      <br />
      <h3>Registrate</h3>{' '}
      <br />
      <Form onSubmit={submitHandler}>
        <Form.Label htmlFor="nombreInput">Nombre</Form.Label>
        <Form.Control id="nombreInput" name="name" type="text" />
       
        <Form.Label>Apellido</Form.Label>
        <Form.Control name="lastname" type="text" />
        
        <Form.Label>Usuario</Form.Label>
        <Form.Control name="username" type="text" />
        
        <Form.Label>Correo</Form.Label>
        <Form.Control name="email" type="email" />
        
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" />
        
        <Form.Label>Confirma Password</Form.Label>
        <Form.Control name="confirmPassword" type="password" />
        <br />
        <Button variant="dark" type="submit">Registrarme</Button>
        <br /><br />
        <Link to="/login">
            Ya tengo una cuenta
        </Link>
      </Form>
      </Container>
    </>
  );
};

export default RegisterPage;