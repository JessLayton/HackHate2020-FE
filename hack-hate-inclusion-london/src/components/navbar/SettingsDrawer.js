import React from 'react';
import { Drawer } from '@material-ui/core';

const SettingsDrawer = ({ open, toggleOpen }) => {
    return (
      <Drawer open={open} anchor='right' onClose={toggleOpen}>
        hello
      </Drawer>
    );
};

export default SettingsDrawer;