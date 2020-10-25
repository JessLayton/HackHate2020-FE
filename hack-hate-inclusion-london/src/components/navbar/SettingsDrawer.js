import React from 'react';
import { Button, Drawer, Slider, Typography } from '@material-ui/core';

import { themes } from '../../theme/theme';
import fontFamilies from '../../theme/fontFamilies';
import { ThemeContext } from '../../theme/ThemeChanger';

const SettingsDrawer = ({ open, toggleOpen }) => {
  const setThemeDetails = React.useContext(ThemeContext);
  const [fontSize, setFontSize] = React.useState(Number(localStorage.getItem('appFontSize') || 14));

  const handleFontSizeChange = (event, newValue) => {
    setFontSize(newValue);
    setThemeDetails({ fontSize: newValue })
  };

  const getThemeOptions = () => (
    <>
      {Object.keys(themes).map((themeName) => (
        <Button 
          key={themeName}
          variant='contained'
          onClick={() => {setThemeDetails({ themeName })}}
        >
          Set Theme
        </Button>
      )
      )}
    </>
  );

  const getFontOptions = () => (
    <>
      <Slider
        value={fontSize}
        min={10}
        max={20}
        step={2}
        marks
        valueLabelDisplay='auto'
        onChange={handleFontSizeChange}
      />
      {Object.keys(fontFamilies).map((fontFamily, index) => (
        <div key={index}>
          <Button
            variant='contained'
            onClick={() => {setThemeDetails({ font: fontFamilies[fontFamily] })}}
          >
          Set Font
        </Button>
        <Typography style={{ fontFamily: fontFamilies[fontFamily] }} >
          This is some text with the font
         </Typography>
        </div>
      ))}
    </>
  );

  return (
    <Drawer open={open} anchor='right' onClose={toggleOpen}>
      {getThemeOptions()}
      {getFontOptions()}
    </Drawer>
  );
};

export default SettingsDrawer;