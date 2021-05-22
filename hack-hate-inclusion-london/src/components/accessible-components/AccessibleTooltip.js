import PropTypes from 'prop-types';
import { Tooltip } from '@material-ui/core';
import React from 'react';

const AccessibleTooltip = ({ title, children, ...other }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip title={title} aria-label={title} interactive leaveDelay={1500} {...other}>
    {children}
  </Tooltip>
);

AccessibleTooltip.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default AccessibleTooltip;
