import React from 'react';
import logo from '../../images/instagram-logo.svg';
import './nav.css';
import { GoHomeFill } from 'react-icons/go';
import { IoSearchOutline } from 'react-icons/io5';
import { MdOutlineExplore } from 'react-icons/md';
import { BiMoviePlay } from 'react-icons/bi';
import { PiPaperPlaneTilt } from 'react-icons/pi';
import { FaRegHeart } from 'react-icons/fa';
import { FiPlusSquare } from 'react-icons/fi';
import { BsThreads } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx';
import user from '../../images/user.svg';
import NavIcon from '../NavIcon/NavIcon';

function Nav() {
  return (
    <header>
      <div>
        <img src={ logo } alt="Instagram logo" />
      </div>

      <div>
        <NavIcon img={ <GoHomeFill /> } text='Página inicial' />
        <NavIcon img={ <IoSearchOutline /> } text='Pesquisa' />
        <NavIcon img={ <MdOutlineExplore /> } text='Explorar' />
        <NavIcon img={ <BiMoviePlay /> } text='Reels' />
        <NavIcon img={ <PiPaperPlaneTilt /> } text='Mensagens' />
        <NavIcon img={ <FaRegHeart /> } text='Notificações' />
        <NavIcon img={ <FiPlusSquare /> } text='Criar' />
        <NavIcon img={ <img src={ user } alt="Profile picture" /> } text='Perfil' />
      </div>

      <div>
        <NavIcon img={ <BsThreads /> } text='Threads' />
        <NavIcon img={ <RxHamburgerMenu /> } text='Mais' />
      </div>
    </header>
  );
}

export default Nav;