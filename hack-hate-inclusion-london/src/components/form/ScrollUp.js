import React from "react";

import FAB from "@material-ui/core/FAB";
import NavigationIcon from "@material-ui/icons/Navigation";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  fab: {
    position: "fixed",
    bottom: "30px",
    right: "40px",
    color: "primary"
  },
}));

const ScrollUp = ({ scrollStepInPx, delayInMs }) => {
  const classes = useStyles();

  const [intervalId, setIntervalId] = React.useState(0);
  React.useEffect(() => {
    setIntervalId(0);
  }, [intervalId]);

  const scrollStep = () => {
    if (window.pageYOffset === 0) {
        setIntervalId(0)
    }
    window.scroll(0, window.pageYOffset - {scrollStepInPx});
  }
  
  const scrollToTop = ({intervalId}) => {
    intervalId = setInterval(scrollStep.apply({delayInMs}));
    intervalId = setIntervalId({intervalId});
  }

  return (
    <FAB className={classes.fab} color="primary" onClick={scrollToTop}>
      <NavigationIcon />
    </FAB>
  );
};

export default ScrollUp;
