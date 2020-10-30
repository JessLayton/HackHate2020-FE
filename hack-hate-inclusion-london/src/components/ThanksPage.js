import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const ThanksPage = () => {
  return (
    <Grid container alignItems="center" justify="center">
      <Grid item>
        <Typography component="h2" variant="h4">
          Thank you filling out this form.{" "}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">
          This data will create a strong body of evidence on the work carried
          out by DDPOs to support Disabled Victims of Hate Crime.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ThanksPage;
