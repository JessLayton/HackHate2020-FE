
import React from "react";
import {
  Box,
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { addOrganisation } from "../connections/DatabaseService";

const useStyles = makeStyles({
  margin: {
    marginLeft: "100px",
    marginRight: "100px",
  },
});

const OrgEntry = () => {
  const classes = useStyles();
  const history = useHistory();

  const [orgName, setOrgName] = React.useState("");

  const handleChange = (event) => {
    setOrgName(event.target.value);
  };

  const handleSubmit = async () => {
    const response = await addOrganisation(orgName);
    alert(`Added ${response.data.data.name}`);
  };

  const validateEntry = () => {
    if (orgName) {
      return false;
    }
    return true;
  };
  const returnToForm = () => {
    history.push("/")
  }

  return (
    <Box className={classes.margin}>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <Typography variant="h4" component="h2">
            Add A DDPO
          </Typography>
        </Grid>
        <Grid container item direction="column" spacing={1}>
          <Grid item>
            <Typography>Please enter the name of your organisation:</Typography>
          </Grid>
          <Grid item>
            <TextField
              id="ddpo-name-input"
              required
              variant="outlined"
              label="Organisation Registration"
              placeholder="Enter an organisation name..."
              InputLabelProps={{ shrink: true }}
              value={orgName}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={!validateEntry}
          >
            Add Organisation
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={returnToForm}>
            Return to form
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrgEntry;
