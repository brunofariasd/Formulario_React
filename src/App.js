import React from 'react';
import FormularioCadastro from './components/FormularioCadastro'
import { Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';
import './App.css';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center" color='primary'>Formulário de cadastro</Typography>
      <FormularioCadastro/>
    </Container>
  );
}

export default App;
