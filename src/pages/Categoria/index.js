import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../components/PageDefault";
import FormField from "../../components/FormField";
import Button from "../../components/Button";

function CadastroCategoria() {
  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: "#000000",
  };
  const [categorias, setCategorias] = useState([]); // storage

  const [values, setValues] = useState(valoresIniciais); // all input values

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault(); //prevent form action
    setCategorias([
      ...categorias, // old values
      values, // new values
    ]);

    setValues(valoresIniciais);
  };

  function handleChange(event) {
    //
    setValue(event.target.getAttribute("name"), event.target.value);
  }

  return (
    <PageDefault>
      <h1> Cadastro de Categoria: {values["nome"]}</h1>
      {/* <Link to="/">Ir para home</Link> */}
      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />
        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>
      </form>
      <ul>
        {categorias.map((categoria, indice) => {
          // traversing data
          return <li key={`${categoria}${indice}`}>{categoria.nome}</li>;
        })}
      </ul>
    </PageDefault>
  );
}

export default CadastroCategoria;
