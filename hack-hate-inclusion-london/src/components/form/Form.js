import React from "react";
import { TextField, Button, Grid, makeStyles } from "@material-ui/core";

import MonthPicker from "./MonthPicker";
import Checkboxes from "./Checkboxes";
import BigTextBox from "./BigTextBox";
import NumberFieldsGroup from "./NumberFieldsGroup";
import AutocompleteField from "./AutocompleteField";

import ethnicities from "../../resources/ethnicities";
import referralsAndEnquiries from "../../resources/referralsAndEnquiries";
import supportTypes from "../../resources/supportTypes";
import gendersAndSexualities from "../../resources/gendersAndSexualities";
import caseAttributes from "../../resources/caseAttributes";
import unreportedCases from "../../resources/unreportedCases";
import ageGroups from "../../resources/ageGroups";
import DDPOs from "../../resources/DDPOs";

const useStyles = makeStyles({
  form: {
    marginLeft: "100px",
    marginRight: "100px",
  },
});

const createInitialState = (resources) => {
  let initialState = {};
  resources.forEach((resource) => {
    initialState[resource.label] = 0;
  });
  return initialState;
};

const Form = () => {
  const classes = useStyles();
  const [referralsCount, setReferralsCount] = React.useState(
    createInitialState(referralsAndEnquiries)
  );
  const [supportCount, setSupportCount] = React.useState(
    createInitialState(supportTypes)
  );
  const [unreportedCaseCount, setUnreportedCaseCount] = React.useState(
    createInitialState(unreportedCases)
  );
  const [ethnicityCount, setEthnicityCount] = React.useState(
    createInitialState(ethnicities)
  );
  const [identityCount, setIdentityCount] = React.useState(
    createInitialState(gendersAndSexualities)
  );
  const [caseAttributeCount, setAttributeCount] = React.useState(
    createInitialState(caseAttributes)
  );
  const [ageCount, setAgeCount] = React.useState(createInitialState(ageGroups));
  const [selectedDate, setDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());

  React.useEffect(() => {
    setEndDate(addMonths(selectedDate));
  }, [selectedDate])

  const addMonths = (date) => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + 3);
    return newDate;
  };
 
  return (
    <form className={classes.form}>
      <Grid container direction="column">
        <Grid item>
          <p>1. Time Period (3 month range)</p>
          <MonthPicker value={selectedDate} onChange={setDate} />
          <p>
            Time period of {selectedDate.toString()} to {endDate.toString()}
          </p>
          <p>2. Name of DDPO</p>
          <AutocompleteField label="DDPO" options={DDPOs} />
          <p>3. Boroughs Covered (Tick all that apply)</p>
          <Checkboxes />
          <p>
            4. Details of referrals / enquiries during this quarter - Please
            provide a number
          </p>
          <NumberFieldsGroup
            inputs={referralsAndEnquiries}
            value={referralsCount}
            onChange={setReferralsCount}
            minValue={0}
          />
        </Grid>
        <Grid item>
          <p>
            5. For DDPOs who are not collecting detailed data, please provide a
            short paragraph (up to 300 words) highlighting key issues,
            challenges / positive outcomes.
          </p>
          <BigTextBox label="Key issues/outcomes (300 words max)" />
        </Grid>
        <Grid item>
          <p>6. Type of support provided - Please provide a number</p>
          <NumberFieldsGroup
            inputs={supportTypes}
            value={supportCount}
            onChange={setSupportCount}
            minValue={0}
          />
          <p>
            7. Cases not reported to Police - Please state main reasons why,
            with number of cases
          </p>
          <NumberFieldsGroup
            inputs={unreportedCases}
            value={unreportedCaseCount}
            onChange={setUnreportedCaseCount}
            minValue={0}
          />
          <TextField
            label="Give details"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <p>8. Age of persons being supported - Please provide a number</p>
          <NumberFieldsGroup
            inputs={ageGroups}
            value={ageCount}
            onChange={setAgeCount}
            minValue={0}
          />
          <p>9. Ethnicity of persons being supported</p>
          <NumberFieldsGroup
            inputs={ethnicities}
            value={ethnicityCount}
            onChange={setEthnicityCount}
            minValue={0}
          />
          <p>10. Gender / Sexual orientation of persons supported, by %</p>
          <NumberFieldsGroup
            inputs={gendersAndSexualities}
            value={identityCount}
            onChange={setIdentityCount}
            minValue={0}
            maxValue={100}
          />
          <p>
            11. Of the cases being dealt with, how many were related to the
            below - Please provide a number
          </p>
          <NumberFieldsGroup
            inputs={caseAttributes}
            value={caseAttributeCount}
            onChange={setAttributeCount}
            minValue={0}
          />
        </Grid>
        <Grid item>
          <p>
            12. Brief case study highlighting emotional impact of Disability
            Hate Crime and/or challenges / positives dealing with Police / CPS
          </p>
          <BigTextBox label="Case Study (300 words max)" />
          <p>
            13. Brief case study highlighting achieving positive outcome without
            a report to police
          </p>
          <BigTextBox label="Case Study (300 words max)" />
        </Grid>
        <Button variant="contained" color="primary" size="large">
          Submit
        </Button>
      </Grid>
    </form>
  );
};

export default Form;
