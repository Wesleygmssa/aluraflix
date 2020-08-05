import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';


function CadastroCategoria() {

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }
    const [categorias, setCategorias] = useState([]); //storage 

    const [values, setValues] = useState(valoresIniciais); // input values all


    function setValue(chave, valor) { 
        setValues({
            ...values,
            [chave]: valor // nome: 'valor'
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault(); //prevent form action
        setCategorias([
            ...categorias, // old values
                values     // new values
            ]);

        setValues(valoresIniciais)
    }

    function handleChange(event) {
        //  const {getAttribute, value} = event.target
        setValue(
            event.target.getAttribute('name'),
            event.target.value
        )
    }

    return (
        <PageDefault>
            <h1> Cadastro de Categoria: {values['nome']}</h1>
            <Link to="/">
                Ir para home
            </Link>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Nome da Categoria:
                         <input
                            type="text"
                            name="nome"
                            value={values['nome']}
                            onChange={handleChange} //change in input value
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Descrição:
                         <textarea
                            type="text"
                            name="descricao"
                            value={values['descricao']}
                            onChange={handleChange} 
                        >
                        </textarea>
                    </label>
                </div>
                <div>
                    <label>
                        Cor:
                         <input
                            type="color"
                            name="cor"
                            value={values['cor']}
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <button>
                    Cadastrar
              </button>
            </form>

            <ul> 
                {categorias.map((categoria, indice) => {// traversing data
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>
        </PageDefault>
    )
}

export default CadastroCategoria;