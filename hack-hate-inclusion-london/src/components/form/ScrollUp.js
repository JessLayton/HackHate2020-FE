import React from 'react';
import FAB from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import { makeStyles } from '@material-ui/core/styles';

import AccessibleTooltip from '../accessible-components/AccessibleTooltip';

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
    <AccessibleTooltip title='Back to top'>
      <FAB className={classes.fab} color='primary' onClick={scrollToTop}>
        <NavigationIcon />
      </FAB>
    </AccessibleTooltip>
  );
};

export default ScrollUp;
