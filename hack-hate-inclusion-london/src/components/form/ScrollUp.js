import React from 'react';

import FAB from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import Tooltip from '@mui/material/Tooltip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  fab: (show) => ({
    position: 'fixed',
    bottom: '30px',
    right: '40px',
    color: 'primary',
    display: show ? 'flex' : 'none',
  }),
});

const ScrollUp = () => {
  const [showFAB, setShowFAB] = React.useState(false);
  const classes = useStyles(showFAB);

  const checkScroll = () => {
    if (window.pageYOffset > 600) {
      setShowFAB(true);
    } else {
      setShowFAB(false);
    }
  };

  window.addEventListener('scroll', checkScroll);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <Tooltip title='Back to top' aria-label='back-to-top-of-form'>
      <FAB className={classes.fab} color='primary' onClick={scrollToTop}>
        <NavigationIcon />
      </FAB>
    </Tooltip>
  );
};

export default ScrollUp;
