import React from "react";
import { Button, Grid, makeStyles } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

import AutocompleteField from "./AutocompleteField";
import YearPicker from "./YearPicker";
import Checkboxes from "./Checkboxes";
import NumberFieldsGroup from "./NumberFieldsGroup";
import TextBox from "./TextBox";
import BigTextBox from "./BigTextBox";
import ScrollUp from "./ScrollUp";

import ethnicities, { initialisedEthnicities } from "../../resources/ethnicities";
import referralsAndEnquiries, { initialisedReferralsAndEnquiries } from "../../resources/referralsAndEnquiries";
import supportTypes, { initialisedSupportTypes } from "../../resources/supportTypes";
import gendersAndSexualities, { initialisedGendersAndSexualities} from "../../resources/gendersAndSexualities";
import caseAttributes, { initialisedCaseAttributes } from "../../resources/caseAttributes";
import unreportedCases, { initialisedUnreportedCases } from "../../resources/unreportedCases";
import ageGroups, { initialisedAgeGroups } from "../../resources/ageGroups";
import DDPOs, { initialisedDDPOs } from "../../resources/DDPOs";
import yearQuarters, { initialisedQuarters } from "../../resources/yearQuarters";

const useStyles = makeStyles({
  form: {
    marginLeft: "100px",
    marginRight: "100px",
  },
});

const Form = () => {
  const classes = useStyles();
  const [dateRangeOption, setDateRangeOption] = React.useState(initialisedQuarters);
  const [organisation, setOrganisation] = React.useState(initialisedDDPOs);
  const [referralsCount, setReferralsCount] = React.useState(initialisedReferralsAndEnquiries);
  const [supportCount, setSupportCount] = React.useState(initialisedSupportTypes);
  const [unreportedCaseCount, setUnreportedCaseCount] = React.useState(initialisedUnreportedCases);
  const [ethnicityCount, setEthnicityCount] = React.useState(initialisedEthnicities);
  const [identityCount, setIdentityCount] = React.useState(initialisedGendersAndSexualities);
  const [caseAttributeCount, setAttributeCount] = React.useState(initialisedCaseAttributes);
  const [ageCount, setAgeCount] = React.useState(initialisedAgeGroups);

  const [selectedDate, setDate] = React.useState(new Date());
  const [keyIssuesPara, setKeyIssuesPara] = React.useState("");
  const [emotionalImpactCS, setEmotionalImpactCS] = React.useState("");
  const [outcomesCS, setOutcomesCS] = React.useState("");
  const [otherDetails, setOtherDetails] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you for submitting");
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Grid container direction="column" spacing={7}>
        <ScrollUp scrollStepInPx="50" delayInMs="16.66"/>
        <Grid container item spacing={2}>
          <Grid item>
            <p>1. Time Period (Quarterly)</p>
          </Grid>
          <Grid container item direction="row" spacing={2}>
            <Grid item>
              <AutocompleteField
                options={yearQuarters}
                value={dateRangeOption}
                onChange={setDateRangeOption}
                required
                placeholder="Quarter"
              />
            </Grid>
            <Grid item>
              <YearPicker value={selectedDate} onChange={setDate} required />
            </Grid>
          </Grid>
        </Grid>
        <Divider />
        <Grid container item direction="column" spacing={2}>
          <Grid item>
            <p>2. Name of DDPO</p>
          </Grid>
          <Grid item>
            <AutocompleteField
              options={DDPOs}
              value={organisation}
              onChange={setOrganisation}
              required
              placeholder="DDPO"
            />
          </Grid>
        </Grid>
        <Divider />
        <Grid container item direction="column" spacing={2}>
          <Grid item>
            <p>3. Boroughs Covered (Tick all that apply)</p>
          </Grid>
          <Grid item>
            <Checkboxes />
          </Grid>
        </Grid>
        <Divider />
        <Grid container item direction="column" spacing={2}>
          <Grid item>
            <p>
              4. Details of referrals / enquiries during this quarter - Please
              provide a number
            </p>
          </Grid>
          <Grid container item direction="column" spacing={2}>
            <NumberFieldsGroup
              inputs={referralsAndEnquiries}
              value={referralsCount}
              onChange={setReferralsCount}
              minValue={0}
              miniLabel={referralsAndEnquiries}
            />
          </Grid>
        </Grid>
        <Divider />
        <Grid container item>
          <p>
            5. For DDPOs who are not collecting detailed data, please provide a
            short paragraph (up to 300 words) highlighting key issues,
            challenges / positive outcomes.
          </p>
          <BigTextBox
            label="Key issues/outcomes (300 words max)"
            value={keyIssuesPara}
            onBlur={setKeyIssuesPara}
          />
        </Grid>
        <Divider />
        <Grid container item direction="column" spacing={2}>
          <Grid item>
            <p>6. Type of support provided - Please provide a number</p>
          </Grid>
          <Grid container item direction="column" spacing={2}>
            <NumberFieldsGroup
              inputs={supportTypes}
              value={supportCount}
              onChange={setSupportCount}
              minValue={0}
            />
          </Grid>
        </Grid>
        <Divider />
        <Grid container item direction="column" spacing={2}>
          <Grid item>
            <p>
              7. Cases not reported to Police - Please state main reasons why,
              with number of cases
            </p>
          </Grid>
          <Grid container item direction="column" spacing={1}>
            <Grid item>
            <NumberFieldsGroup
              inputs={unreportedCases}
              value={unreportedCaseCount}
              onChange={setUnreportedCaseCount}
              minValue={0}
            />
            </Grid>
            <Grid item>
            <TextBox
              placeholder="Give Details"
              value={otherDetails}
              onBlur={setOtherDetails}
            />
            </Grid>
          </Grid>
        </Grid>
        <Divider />
        <Grid container item direction="column" spacing={2}>
          <Grid item>
            <p>8. Age of persons being supported - Please provide a number</p>
          </Grid>
          <Grid container item direction="column" spacing={2}>
            <NumberFieldsGroup
              inputs={ageGroups}
              value={ageCount}
              onChange={setAgeCount}
              minValue={0}
            />
          </Grid>
        </Grid>
        <Divider />
        <Grid container item direction="column" spacing={2}>
          <Grid item>
            <p>9. Ethnicity of persons being supported</p>
          </Grid>
          <Grid container item direction="column" spacing={2}>
            <NumberFieldsGroup
              inputs={ethnicities}
              value={ethnicityCount}
              onChange={setEthnicityCount}
              minValue={0}
            />
          </Grid>
        </Grid>
        <Divider />
        <Grid container item direction="column" spacing={2}>
          <Grid item>
            <p>10. Gender / Sexual orientation of persons supported, by %</p>
          </Grid>
          <Grid container item direction="column" spacing={2}>
            <NumberFieldsGroup
              inputs={gendersAndSexualities}
              value={identityCount}
              onChange={setIdentityCount}
              minValue={0}
              maxValue={100}
            />
          </Grid>
        </Grid>
        <Divider />
        <Grid container item direction="column" spacing={2}>
          <Grid item>
            <p>
              11. Of the cases being dealt with, how many were related to the
              below - Please provide a number
            </p>
          </Grid>
          <Grid container item direction="column" spacing={2}>
            <NumberFieldsGroup
              inputs={caseAttributes}
              value={caseAttributeCount}
              onChange={setAttributeCount}
              minValue={0}
            />
          </Grid>
        </Grid>
        <Divider />
        <Grid container item direction="column" spacing={2}>
          <Grid item>
            <p>
              12. Brief case study highlighting emotional impact of Disability
              Hate Crime and / or challenges / positives dealing with Police /
              CPS
            </p>
          </Grid>
          <Grid item>
            <BigTextBox
              label="Case Study (300 words max)"
              value={emotionalImpactCS}
              onBlur={setEmotionalImpactCS}
            />
          </Grid>
        </Grid>
        <Divider />
        <Grid container item direction="column" spacing={2}>
          <Grid item>
            <p>
              13. Brief case study highlighting achieving positive outcomes
              without a report to police
            </p>
          </Grid>
          <Grid item>
            <BigTextBox
              label="Case Study (300 words max)"
              value={outcomesCS}
              onBlur={setOutcomesCS}
            />
          </Grid>
        </Grid>
        <Divider />
        <Grid item>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
