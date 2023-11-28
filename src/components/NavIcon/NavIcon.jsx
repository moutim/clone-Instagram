import React from 'react';
import PropTypes from 'prop-types';
import './navIcon.css';

function NavIcon({ text, img }) {
  return (
    <div className='nav-icon'>
      <div>
        { img }
      </div>
      <div>
        <p>{ text }</p>
      </div>
    </div>
  );
}

NavIcon.propTypes = {
  text: PropTypes.string.isRequired,
  img: PropTypes.element.isRequired,
};

export default NavIcon;