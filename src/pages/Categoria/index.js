import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';


function CadastroCategoria(){

    const [nomeCategoria, setNomeCategoria] = useState('teste');
    const [categorias, setCategorias] = useState([]);

    const handleSubmit = (event) =>{
        event.preventDefault();
        setCategorias([
            ...categorias,
            nomeCategoria
        ]);
        
    }

    return(
        <PageDefault>
            <h1> Cadastro de Categoria: {nomeCategoria}</h1>
            <Link to="/">
                Ir para home
            </Link>

          <form onSubmit={handleSubmit}>
              <label>
                  Nome da Categoria:
                  <input 
                  type="text" 
                  value={nomeCategoria}
                  onChange={(event)=>{setNomeCategoria(event.target.value)}} //mudança no value do input
                  />
              </label>

              <button>
                  Cadastrar
              </button>
          </form>

          <ul>
              {categorias.map((categoria, indice)=>{
                  return(
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