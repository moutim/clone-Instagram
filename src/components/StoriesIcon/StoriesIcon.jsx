import React from 'react';
import PropTypes from 'prop-types';
import './storiesIcon.css';

function StoriesIcon({ srcImg, user }) {
  return (
    <div className='stories-icon'>
      <img src={ srcImg } alt="Imagem de perfil do usuario" />
      <p>{ user }</p>
    </div>
  );
}

StoriesIcon.propTypes = {
  user: PropTypes.string.isRequired,
  srcImg: PropTypes.string.isRequired,
};

export default StoriesIcon;