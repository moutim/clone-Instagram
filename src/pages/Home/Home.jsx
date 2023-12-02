import React from 'react';
import Nav from '../../components/Nav/Nav';
import './home.css';
import MainContent from '../../components/MainContent/MainContent';
import RightContent from '../../components/RightContent/RightContent';

function Home() {

  return (
    <div className='home'>
      <Nav />
      <div className='conteudo-principal'>
        <MainContent />
        <RightContent />
      </div>
    </div>
  );
}

export default Home;