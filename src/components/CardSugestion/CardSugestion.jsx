import React from 'react';
import './cardSugestion.css';
import PropTypes from 'prop-types';
import { FaCircleUser } from 'react-icons/fa6';

function CardSugestion({ user, description }) {
  return (
    <div className='card-sugestion'>
      <div className='nome-descricao'>
        <div>
          <FaCircleUser />
        </div>
        <div>
          <p><span>{ user }</span></p>
          <p>{ description }</p>
        </div>
      </div>

      <div>
        <p>Mudar</p>
      </div>
    </div>
  );
}

CardSugestion.propTypes = {
  user: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardSugestion;