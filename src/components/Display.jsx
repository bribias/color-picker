import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ color }) => {
  return <div style={{
    background: color,
    width: 500,
    height: 500,
    borderRadius: 500
  }}></div>;
};

Display.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Display;
