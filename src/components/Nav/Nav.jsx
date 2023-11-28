import React from 'react';
import logo from '../../images/instagram-logo.svg';
import './nav.css';
import { GoHomeFill } from 'react-icons/go';
import NavIcon from '../NavIcon/NavIcon';

function Nav() {
  return (
    <header>
      <div>
        <img src={ logo } alt="Instagram logo" />
      </div>

      <div>
        <NavIcon img={ <GoHomeFill /> } text='Página inicial'/>
      </div>
    </header>
  );
}

export default Nav;