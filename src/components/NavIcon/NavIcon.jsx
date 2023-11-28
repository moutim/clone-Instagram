import React from 'react';
import PropTypes from 'prop-types';

function NavIcon({ text, img }) {
  return (
    <div>
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