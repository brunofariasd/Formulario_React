import React, { useState } from "react";
import { TextField, FormControlLabel, Switch, Button } from "@material-ui/core";

function FormularioCadastro() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [novidades, setNovidades] = useState(true);
  const [promocoes, setPromocoes] = useState(true);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log({ nome, sobrenome, cpf, novidades, promocoes });
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          let tempNome = event.target.value;
          if (tempNome.length >= 15) {
            tempNome = tempNome.substr(0, 15);
          }
          setNome(tempNome);
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
        color="primary"
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          let tempSobrenome = event.target.value;
          if (tempSobrenome.length >= 30) {
            tempSobrenome = tempSobrenome.substr(0, 30);
          }
          setSobrenome(tempSobrenome);
        }}
        id="Sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
        color="primary"
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        id="CPF"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
        color="primary"
      />
      <FormControlLabel
        control={
          <Switch
            checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            name="Novidades"
            color="primary"
          />
        }
        label="Novidades"
      />
      <FormControlLabel
        control={
          <Switch
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            name="Promocoes"
            color="primary"
          />
        }
        label="Promoções"
      />
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
