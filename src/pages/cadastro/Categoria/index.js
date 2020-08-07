import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import Button from "../../../components/Button";
import FormField from "../../../components/FormField";
import axios from "axios";

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

  useEffect(() => {
    //api
    const URLTOP = "http://localhost:8080/categorias";
    axios.get(URLTOP).then((response) => {
      setCategorias([...response.data]);
    });
    // setTimeout(() => {
    //   setCategorias([
    //     ...categorias, // old values

    //     {
    //       id: 1,
    //       nome: "Front end",
    //       descricao: "Uma categoria show",
    //       cor: "#cbd1ff",
    //     },
    //     {
    //       id: 2,
    //       nome: "Back end",
    //       descricao: "Uma categoria show",
    //       cor: "#cbd1ff",
    //     },
    //   ]);
    // }, 10 * 1000);
  }, []);

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

      {categorias.length === 0 && <div>Loading....</div>}

      <ul>
        {categorias.map((categoria) => {
          // traversing data
          return <li key={categoria.nome}>{categoria.nome}</li>;
        })}
      </ul>
    </PageDefault>
  );
}

export default CadastroCategoria;
