import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import ButtonLink from './components/ButtonLink';
import {Link} from 'react-router-dom';
import Button from '../Button';

function Menu() {

    return (
        <nav className="Menu">
        <Link to="/">
            <img className="Logo" src={Logo} alt="Logo da AluraFlix" />
        </Link>

        <Button as={Link} className="ButtonLink" to="/cadastro/video">
            Novo vídeo
        </Button>
        </nav>
        );
        }
    

export default Menu;