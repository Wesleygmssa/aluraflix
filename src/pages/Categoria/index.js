import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';


function CadastroCategoria() {

    const [categorias, setCategorias] = useState([]);

    const valoresIniciais ={
        nome: 'Categoria Inicial',
        descricao: 'Descrição inicial',
        cor: '#000'
    }

    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor){
        setValues({ ...values,
            [chave]: valor // nome: 'valor'
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setCategorias([
            ...categorias, 
            values]);
    }

    return (
        <PageDefault>
            <h1> Cadastro de Categoria: {values.nome}</h1>
            <Link to="/">
                Ir para home
            </Link>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Nome da Categoria:
                         <input
                            type="text"
                            value={values.nome}
                            onChange={(event) => { setValue('nome', event.target.value) }} //mudança no value do input
                             />
                    </label>
                </div>
                <div>
                    <label>
                        Descrição:
                         <textarea
                            type="text"
                            value={values.descricao}
                            onChange={(event) => { setValue('descricao', event.target.value) }} //mudança no value do input
                             >

                             </textarea>
                    </label>
                </div>
                <div>
                    <label>
                        Cor:
                         <input
                            type="color"
                            value={values.cor}
                            onChange={(event) => {  setValue('color', event.target.value) }} //mudança no value do input
                             />
                    </label>
                </div>

                <button>
                    Cadastrar
              </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria}
                        </li>
                    )
                })}
            </ul>
        </PageDefault>
    )
}

export default CadastroCategoria;