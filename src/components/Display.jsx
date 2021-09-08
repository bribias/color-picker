import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ color }) => {
  return <div style={{ background: color }}>COLOR IS HERE</div>;
};

Display.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Display;
