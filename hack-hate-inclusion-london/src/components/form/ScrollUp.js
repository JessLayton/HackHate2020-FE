import React from "react";

import FAB from "@material-ui/core/FAB";
import NavigationIcon from "@material-ui/icons/Navigation";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  fab: {
    position: "fixed",
    bottom: "30px",
    right: "40px",
    color: "primary",
  },
}));

const ScrollUp = ({ scrollStepInPx, delayInMs }) => {
  const classes = useStyles();

  const scrollStep = () => {  
    window.scroll(0, window.pageYOffset - {scrollStepInPx});
  };

  const scrollToTop = () => {    
    scrollStep.apply(delayInMs);
  };

  return (
    <Tooltip title="Back to top">
      <FAB className={classes.fab} color="primary" onClick={scrollToTop}>
        <NavigationIcon />
      </FAB>
    </Tooltip>
  );
};

export default ScrollUp;
