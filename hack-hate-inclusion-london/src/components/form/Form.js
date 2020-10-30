import React from "react";
import { useHistory } from "react-router-dom";
import { Box, Button, Grid, makeStyles, Link } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

import { postForm } from "../../connections/DatabaseService";
import Brief from "./Brief";
import AutocompleteField from "./AutocompleteField";
import YearPicker from "./YearPicker";
import Checkboxes from "./Checkboxes";
import NumberFieldsGroup from "./NumberFieldsGroup";
import TextBox from "./TextBox";
import BigTextBox from "./BigTextBox";
import ScrollUp from "./ScrollUp";

import ethnicities, {
  initialisedEthnicities,
} from "../../resources/ethnicities";
import referralsAndEnquiries, {
  initialisedReferralsAndEnquiries,
} from "../../resources/referralsAndEnquiries";
import supportTypes, {
  initialisedSupportTypes,
} from "../../resources/supportTypes";
import caseAttributes, {
  initialisedCaseAttributes,
} from "../../resources/caseAttributes";
import unreportedCases, {
  initialisedUnreportedCases,
} from "../../resources/unreportedCases";
import ageGroups, { initialisedAgeGroups } from "../../resources/ageGroups";
import DDPOs, { initialisedDDPOs } from "../../resources/DDPOs";
import yearQuarters, {
  initialisedQuarters,
} from "../../resources/yearQuarters";
import impairments, {
  initialisedImpairments,
} from "../../resources/impairments";
import genders, { initialisedGenders } from "../../resources/gender";
import sex, { initialisedSex } from "../../resources/sex";
import sexualities, {
  initialisedSexualities,
} from "../../resources/sexualities";

const useStyles = makeStyles({
  form: {
    marginLeft: "100px",
    marginRight: "100px",
    marginTop: "20px",
  },
});

const Form = () => {
  const classes = useStyles();
  const [dateRangeOption, setDateRangeOption] = React.useState(
    initialisedQuarters
  );
  const [organisation, setOrganisation] = React.useState(initialisedDDPOs);
  const [referralsCount, setReferralsCount] = React.useState(
    initialisedReferralsAndEnquiries
  );
  const [supportCount, setSupportCount] = React.useState(
    initialisedSupportTypes
  );
  const [unreportedCaseCount, setUnreportedCaseCount] = React.useState(
    initialisedUnreportedCases
  );
  const [ethnicityCount, setEthnicityCount] = React.useState(
    initialisedEthnicities
  );
  const [genderCount, setGenderCount] = React.useState(initialisedGenders);
  const [sexCount, setSexCount] = React.useState(initialisedSex);
  const [sexualitiesCount, setSexualitiesCount] = React.useState(
    initialisedSexualities
  );
  const [impairmentCount, setImpairmentCount] = React.useState(
    initialisedImpairments
  );
  const [caseAttributeCount, setAttributeCount] = React.useState(
    initialisedCaseAttributes
  );
  const [ageCount, setAgeCount] = React.useState(initialisedAgeGroups);

  const [selectedDate, setDate] = React.useState(new Date());
  const [keyIssuesPara, setKeyIssuesPara] = React.useState("");
  const [emotionalImpactCS, setEmotionalImpactCS] = React.useState("");
  const [outcomesCS, setOutcomesCS] = React.useState("");
  const [otherDetails, setOtherDetails] = React.useState("");
  const history = useHistory();

  const handleSubmit = async () => {
    try {
      //postForm();
      history.push("/thankyou");
    } catch (error) {
      alert("Failed to submit");
    }
  };

  return (
    <>
      <Box className={classes.form}>
        <Brief className={classes.form} />
      </Box>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Grid container direction="column" spacing={7}>
          <ScrollUp scrollStepInPx="50" delayInMs="16.66" />
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
                  label="Quarter"
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
            <Grid container item>
            <Grid item>
              <AutocompleteField
                options={DDPOs}
                value={organisation}
                onChange={setOrganisation}
                required
                label="DDPO"
              />
              <Grid item>
                <Link href="/ddpo">
                Don't see your DDPO? Click here to add a DDPO
                </Link>
              </Grid>
              </Grid>
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
                onBlur={setReferralsCount}
                minValue={0}
                miniLabel={referralsAndEnquiries}
              />
            </Grid>
          </Grid>
          <Divider />
          <Grid container item>
            <p>
              5. For DDPOs who are not collecting detailed data, please provide
              a short paragraph (up to 300 words) highlighting key issues,
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
                onBlur={setSupportCount}
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
                  onBlur={setUnreportedCaseCount}
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
                onBlur={setAgeCount}
                minValue={0}
              />
            </Grid>
          </Grid>
          <Divider />
          <Grid container item direction="column" spacing={2}>
            <Grid item>
              <p>
                9. Ethnicity of persons being supported - Please provide a
                number
              </p>
            </Grid>
            <Grid container item direction="column" spacing={2}>
              <NumberFieldsGroup
                inputs={ethnicities}
                value={ethnicityCount}
                onBlur={setEthnicityCount}
                minValue={0}
              />
            </Grid>
          </Grid>
          <Divider />
          <Grid container item direction="column" spacing={2}>
            <Grid item>
              <p>
                10. Service users which identify as male or female - Please
                provide a number
              </p>
            </Grid>
            <Grid container item direction="column" spacing={2}>
              <NumberFieldsGroup
                inputs={sex}
                value={sexCount}
                onBlur={setSexCount}
                minValue={0}
              />
            </Grid>
          </Grid>
          <Divider />
          <Grid container item direction="column" spacing={2}>
            <Grid item>
              <p>
                11. Users which describe sexual orientation as the following
                terms - Please provide a number
              </p>
            </Grid>
            <Grid container item direction="column" spacing={2}>
              <NumberFieldsGroup
                inputs={sexualities}
                value={sexualitiesCount}
                onBlur={setSexualitiesCount}
                minValue={0}
              />
            </Grid>
          </Grid>
          <Divider />
          <Grid container item direction="column" spacing={2}>
            <Grid item>
              <p>
                12.Service users which identify as the same gender to the sex
                they were registered with at birth - Please provide a number
              </p>
            </Grid>
            <Grid container item direction="column" spacing={2}>
              <NumberFieldsGroup
                inputs={genders}
                value={genderCount}
                onBlur={setGenderCount}
                minValue={0}
              />
            </Grid>
          </Grid>
          <Divider />
          <Grid container item direction="column" spacing={2}>
            <Grid item>
              <p>
                13. Service users with the following disabilities or impairments
                - Please provide a number
              </p>
            </Grid>
            <Grid container item direction="column" spacing={2}>
              <NumberFieldsGroup
                inputs={impairments}
                value={impairmentCount}
                onBlur={setImpairmentCount}
                minValue={0}
              />
            </Grid>
          </Grid>
          <Divider />
          <Grid container item direction="column" spacing={2}>
            <Grid item>
              <p>
                14. Of the cases being dealt with, how many were related to the
                below - Please provide a number
              </p>
            </Grid>
            <Grid container item direction="column" spacing={2}>
              <NumberFieldsGroup
                inputs={caseAttributes}
                value={caseAttributeCount}
                onBlur={setAttributeCount}
                minValue={0}
              />
            </Grid>
          </Grid>
          <Divider />
          <Grid container item direction="column" spacing={2}>
            <Grid item>
              <p>
                15. Brief case study highlighting emotional impact of Disability
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
                16. Brief case study highlighting achieving positive outcomes
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
    </>
  );
};

export default Form;
