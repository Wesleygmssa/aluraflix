import { useState } from "react";

//custo huck
function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    // 01
    // chave: nome, descricao, bla, bli
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  }

  function handleChange(infosDoEvento) {
    // 02
    //mudanda input
    setValue(
      infosDoEvento.target.getAttribute("name"), //chave
      infosDoEvento.target.value // valor
    );
  }

  function clearForm() {
    //03
    setValues(valoresIniciais);
  }
  //function
  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
