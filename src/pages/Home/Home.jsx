import React from 'react';
import Nav from '../../components/Nav/Nav';
import './home.css';
import MainContent from '../../components/MainContent/MainContent';

function Home() {

  return (
    <div className='home'>
      <Nav />
      <MainContent />
    </div>
  );
}

export default Home;