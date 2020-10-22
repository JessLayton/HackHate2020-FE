import React from 'react';
import { Button, Drawer } from '@material-ui/core';

import themeNames from '../../theme/themeNames';
import { ThemeContext } from '../../theme/ThemeChanger';

const SettingsDrawer = ({ open, toggleOpen }) => {
  const setThemeName = React.useContext(ThemeContext);

  const getThemeOptions = () => (
    <>
      {themeNames.map((themeName) => (
        <Button key={themeName} variant='contained' onClick={() => {setThemeName(themeName)}}>
          Set Theme
        </Button>
      )
      )}
    </>
  );

    return (
      <Drawer open={open} anchor='right' onClose={toggleOpen}>
        {getThemeOptions()}
      </Drawer>
    );
};

export default SettingsDrawer;