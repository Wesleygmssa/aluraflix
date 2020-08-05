import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';


function CadastroCategoria() {

    const valoresIniciais = {
        name: '',
        description: '',
        color: '#000000',
    }
    const [categorias, setCategorias] = useState([]); // storage all input

    const [values, setValues] = useState(valoresIniciais); // all input values 


    function setValue(chave, value) { 
        setValues({
            ...values,
            [chave]: value // name: 'value'
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

    function handleChange(event) { // 
        setValue(
            event.target.getAttribute('name'), //get <input name="name"/>
            event.target.value // get <input value="valor digitado"/>
        )
    }

    return (
        <PageDefault>
            <h1> Cadastro de Categoria: {values['name']}</h1>
            <Link to="/">
                Ir para home
            </Link>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Nome da Categoria:
                         <input
                            type="text"
                            name="name"
                            value={values['name']}
                            onChange={handleChange} //change in input value
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Descrição:
                         <textarea
                            type="text"
                            name="description"
                            value={values['description']}
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
                            name="color"
                            value={values['color']}
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