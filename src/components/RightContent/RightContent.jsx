import React from 'react';
import CardSugestion from '../CardSugestion/CardSugestion';
import './RightContent.css';

function RightContent() {
  return (
    <div className='right-content'>
      <div>
        <CardSugestion user='moutim.s' description='Vitor Moutim' />
      </div>

      <div className='box-sugestao-texto'>
        <p>Sugestões para você</p>
        <p>Ver tudo</p>
      </div>

      <div>
        <CardSugestion user='moutim.s' description='Vitor Moutim' />
        <CardSugestion user='moutim.s' description='Vitor Moutim' />
        <CardSugestion user='moutim.s' description='Vitor Moutim' />
        <CardSugestion user='moutim.s' description='Vitor Moutim' />
        <CardSugestion user='moutim.s' description='Vitor Moutim' />
      </div>

      <div className='direitos'>
        <p>© 2023 INSTAGRAM FROM META</p>
      </div>
    </div>
  );
}

export default RightContent;