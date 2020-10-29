import React from "react";

import FAB from "@material-ui/core/FAB";
import NavigationIcon from "@material-ui/icons/Navigation";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  fab: {
    position: "fixed",
    bottom: "40px",
    right: "40px",
  },
}));

const ScrollUp = () => {
  const classes = useStyles();
  return (
    <FAB className={classes.fab} color="primary">
      <NavigationIcon />
    </FAB>
  );
};

export default ScrollUp;
