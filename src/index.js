import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/Categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
       <Route exact path="/" component={App}/>
       <Route path="/cadastro/video" component={CadastroVideo}/>
       <Route path="/cadastro/categoria" component={CadastroCategoria}/>
       <Route  component={()=> (<div>Página 404</div>)}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

