import React from 'react';
import { useHistory } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import {
  Button, Grid, Link, Typography,
} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

import constructForm from './constructForm/constructForm';
import Brief from './Brief';
import AutocompleteField from './textfields/AutocompleteField';
import YearPicker from './pickers/YearPicker';
import Checkboxes from './checkboxes/Checkboxes';
import NumberFieldsGroup from './numberfields/NumberFieldsGroup';
import BigTextBox from './textfields/BigTextBox';
import ScrollUp from './ScrollUp';
import SnackbarStore from '../../snackbar/SnackbarStore';
import DDPOStore from '../ddpo/DDPOStore';

import ethnicities, { initialisedEthnicities } from '../../resources/ethnicities';
import referralsAndEnquiries, { initialisedReferralsAndEnquiries } from '../../resources/referralsAndEnquiries';
import reportingDetails, { initialisedReportingDetails } from '../../resources/reportingDetails';
import supportTypes, { initialisedSupportTypes } from '../../resources/supportTypes';
import unreportedCases, { initialisedUnreportedCases } from '../../resources/unreportedCases';
import intersectionalCrimes, { initialisedIntersectionalCrimes } from '../../resources/intersectionalCrime';
import ageGroups, { initialisedAgeGroups } from '../../resources/ageGroups';
import yearQuarters from '../../resources/yearQuarters';
import impairments, { initialisedImpairments } from '../../resources/impairments';
import genders, { initialisedGenders } from '../../resources/gender';
import sex, { initialisedSex } from '../../resources/sex';
import orientations, { initialisedOrientations } from '../../resources/orientations';
import whereDetails, { initialisedWhereDetails } from '../../resources/whereDetails';
import hateCrime, { initialisedHateCrime } from '../../resources/hateCrime';
import committedBy, { initialisedCommittedBy } from '../../resources/commitedBy';
import currentIssues, { initialisedCurrentIssues } from '../../resources/currentIssues';
import boroughsList from '../../resources/boroughs';

const Form = observer(() => {
  const [quarter, setQuarter] = React.useState('');
  const [year, setYear] = React.useState(new Date());
  const [organisation, setOrganisation] = React.useState('');
  const [boroughs, setBoroughs] = React.useState(boroughsList);
  const [referralsCount, setReferralsCount] = React.useState(initialisedReferralsAndEnquiries);
  const [reportingCount, setReportingCount] = React.useState(initialisedReportingDetails);
  const [supportCount, setSupportCount] = React.useState(initialisedSupportTypes);
  const [unreportedCaseCount, setUnreportedCaseCount] = React.useState(initialisedUnreportedCases);
  const [intersectionCrimesCount, setIntersectionalCrimesCount] = React.useState(initialisedIntersectionalCrimes);
  const [ethnicityCount, setEthnicityCount] = React.useState(initialisedEthnicities);
  const [genderCount, setGenderCount] = React.useState(initialisedGenders);
  const [sexCount, setSexCount] = React.useState(initialisedSex);
  const [orientationsCount, setOrientationCount] = React.useState(initialisedOrientations);
  const [whereCount, setWhereCount] = React.useState(initialisedWhereDetails);
  const [hateCrimeCount, setHateCrimeCount] = React.useState(initialisedHateCrime);
  const [committedByCount, setCommittedByCount] = React.useState(initialisedCommittedBy);
  const [currentIssuesCount, setCurrentIssuesCount] = React.useState(initialisedCurrentIssues);
  const [impairmentCount, setImpairmentCount] = React.useState(initialisedImpairments);
  const [ageCount, setAgeCount] = React.useState(initialisedAgeGroups);
  const [keyIssuesPara, setKeyIssuesPara] = React.useState('');
  const [emotionalImpactCS, setEmotionalImpactCS] = React.useState('');
  const [outcomesCS, setOutcomesCS] = React.useState('');
  const history = useHistory();

  const validWordCount = (entry) => (entry.split(' ').filter((word) => word !== '').length <= 300);

  const validateForm = () => {
    const invalidQuestions = [];
    if (!validWordCount(keyIssuesPara)) {
      invalidQuestions.push(5);
    }
    if (!validWordCount(emotionalImpactCS)) {
      invalidQuestions.push(15);
    }
    if (!validWordCount(outcomesCS)) {
      invalidQuestions.push(16);
    }
    return { valid: invalidQuestions.length === 0, invalidQuestions };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formIsValid = validateForm();
    if (formIsValid.valid) {
      let success;
      try {
        success = await constructForm(
          quarter,
          year,
          organisation,
          boroughs,
          referralsCount,
          reportingCount,
          supportCount,
          unreportedCaseCount,
          intersectionCrimesCount,
          ageCount,
          ethnicityCount,
          genderCount,
          sexCount,
          orientationsCount,
          whereCount,
          hateCrimeCount,
          committedByCount,
          currentIssuesCount,
          impairmentCount,
          keyIssuesPara,
          emotionalImpactCS,
          outcomesCS,
        );
        if (success) {
          history.push('/thankyou');
          SnackbarStore.showSuccess(`Submitted form for ${organisation.name}`);
        }
      } catch (error) {
        console.error(error);
      }
      if (!success) {
        SnackbarStore.showError('Form was not submitted');
      }
    } else {
      SnackbarStore.showError(`The following question(s) are not filled in correctly: ${formIsValid.invalidQuestions.join(', ')}`);
    }
  };

  return (
    <Grid container justify='center'>
      <Grid container item xs={11} sm={10}>
        <ScrollUp />
        <Brief />
        <form onSubmit={handleSubmit}>
          <ol>
            <Grid container item direction='column' spacing={7}>
              <Grid container item spacing={2}>
                <Grid item>
                  <li>Time Period (Quarterly)</li>
                </Grid>
                <Grid container item direction='row' spacing={2}>
                  <Grid item>
                    <AutocompleteField options={yearQuarters} onChange={setQuarter} required label='Quarter' />
                  </Grid>
                  <Grid item>
                    <YearPicker value={year} onChange={setYear} required />
                  </Grid>
                </Grid>
              </Grid>
              <Divider />
              <Grid container item direction='column' spacing={2}>
                <Grid item>
                  <li>Name of DDPO</li>
                </Grid>
                <Grid container item>
                  <Grid item>
                    <AutocompleteField options={DDPOStore.ddpos} onChange={setOrganisation} required label='DDPO' />
                    <Grid item>
                      <Link href='/ddpo'>Don&apos;t see your DDPO? Click here to add a DDPO</Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Divider />
              <Grid container item direction='column' spacing={2}>
                <Grid item>
                  <li>Boroughs Covered (Tick all that apply)</li>
                </Grid>
                <Grid item>
                  <Checkboxes checkedItems={boroughs} onChange={setBoroughs} />
                </Grid>
              </Grid>
              <Divider />
              <Grid container item direction='column' spacing={2}>
                <Grid item>
                  <li>Details of referrals / enquiries during this quarter</li>
                </Grid>
                <Grid container item direction='column' spacing={2}>
                  <NumberFieldsGroup inputs={referralsAndEnquiries} value={referralsCount} onBlur={setReferralsCount} minValue={0} miniLabel={referralsAndEnquiries} />
                </Grid>
              </Grid>
              <Divider />
              <Divider />
              <Grid container item direction='column' spacing={2}>
                <Grid item>
                  <li>Details of reporting during this quarter</li>
                </Grid>
                <Grid container item direction='column' spacing={2}>
                  <NumberFieldsGroup inputs={reportingDetails} value={reportingCount} onBlur={setReportingCount} minValue={0} miniLabel={reportingDetails} />
                </Grid>
              </Grid>
              <Divider />
              <Grid container item direction='column' spacing={2}>
                <Grid item>
                  <li>
                    For DDPOs who are not collecting the data outlined below,
                    please provide a short paragraph (up to 300 words) highlighting key issues, challenges / positive outcomes.
                  </li>
                </Grid>
                <Grid item>
                  <BigTextBox label='Key issues/outcomes (300 words max)' value={keyIssuesPara} onBlur={setKeyIssuesPara} validate={validWordCount} />
                </Grid>
              </Grid>
              <Divider />
              <Grid container item direction='column' spacing={2}>
                <Grid item>
                  <li>Type of support provided - Please provide a number for each</li>
                </Grid>
                <Grid container item direction='column' spacing={2}>
                  <NumberFieldsGroup inputs={supportTypes} value={supportCount} onBlur={setSupportCount} minValue={0} />
                </Grid>
              </Grid>
              <Divider />
              <Grid container item direction='column' spacing={2}>
                <Grid item>
                  <li>For cases not reported to police, please indicate main reasons why - Please provide a number for each</li>
                </Grid>
                <Grid item>
                  <NumberFieldsGroup inputs={unreportedCases} value={unreportedCaseCount} onBlur={setUnreportedCaseCount} minValue={0} />
                </Grid>
              </Grid>
              <Divider />
              <Grid container item direction='column' spacing={2}>
                <Grid item>
                  <li>
                    Intersectionality and Disability Hate Crime:
                    Please indicate how many people you supported felt the hate crime targeted another aspect of their identity and was also a:
                  </li>
                </Grid>
                <Grid item>
                  <NumberFieldsGroup inputs={intersectionalCrimes} value={intersectionCrimesCount} onBlur={setIntersectionalCrimesCount} minValue={0} />
                </Grid>
              </Grid>
              <Divider />
              <Grid container item direction='column' spacing={2}>
                <Grid item>
                  <li>Age of victims being supported - Please provide a number</li>
                </Grid>
                <Grid container item direction='column' spacing={2}>
                  <NumberFieldsGroup inputs={ageGroups} value={ageCount} onBlur={setAgeCount} minValue={0} />
                </Grid>
              </Grid>
              <Divider />
              <Grid container item direction='column' spacing={2}>
                <Grid item>
                  <li>Ethnicity of victims being supported - Please provide a number</li>
                </Grid>
                <Grid container item direction='column' spacing={2}>
                  <NumberFieldsGroup inputs={ethnicities} value={ethnicityCount} onBlur={setEthnicityCount} minValue={0} />
                </Grid>
              </Grid>
              <Divider />
              <Grid container item direction='column' spacing={2}>
                <Grid item>
                  <li>What number of your clients are:  </li>
                </Grid>
                <ol type='a'>
                  <Grid container item direction='column' spacing={5}>
                    <Grid container item direction='column' spacing={2}>
                      <Grid item>
                        <li> </li>
                      </Grid>
                      <Grid container item direction='column' spacing={2}>
                        <NumberFieldsGroup inputs={sex} value={sexCount} onBlur={setSexCount} minValue={0} />
                      </Grid>
                    </Grid>
                    <Grid container item direction='column' spacing={2}>
                      <Grid item>
                        <li> </li>
                      </Grid>
                      <Grid container item direction='column' spacing={2}>
                        <NumberFieldsGroup inputs={orientations} value={orientationsCount} onBlur={setOrientationCount} minValue={0} />
                      </Grid>
                    </Grid>
                    <Grid container item direction='column' spacing={2}>
                      <Grid item>
                        <li> </li>
                      </Grid>
                      <Grid container item direction='column' spacing={2}>
                        <NumberFieldsGroup inputs={genders} value={genderCount} onBlur={setGenderCount} minValue={0} />
                      </Grid>
                    </Grid>
                  </Grid>
                </ol>
              </Grid>
              <Divider />
              <Grid container item direction='column' spacing={2}>
                <Grid item>
                  <li>
                    Details of where the hate crime occurred, the actions involved, and what they were regarding?
                    (This is to highlight the multiple issues a victim can experience)
                  </li>
                </Grid>
                <ol type='a'>
                  <Grid container item direction='column' spacing={5}>
                    <Grid container item direction='column' spacing={2}>
                      <Grid item>
                        <li>Where the hate crime occurred: </li>
                      </Grid>
                      <Grid container item direction='column' spacing={2}>
                        <NumberFieldsGroup inputs={whereDetails} value={whereCount} onBlur={setWhereCount} minValue={0} />
                      </Grid>
                    </Grid>
                    <Grid container item direction='column' spacing={2}>
                      <Grid item>
                        <li>Form of hate crime: </li>
                      </Grid>
                      <Grid container item direction='column' spacing={2}>
                        <NumberFieldsGroup inputs={hateCrime} value={hateCrimeCount} onBlur={setHateCrimeCount} minValue={0} />
                      </Grid>
                    </Grid>
                    <Grid container item direction='column' spacing={2}>
                      <Grid item>
                        <li>Hate crime committed by: </li>
                      </Grid>
                      <Grid container item direction='column' spacing={2}>
                        <NumberFieldsGroup inputs={committedBy} value={committedByCount} onBlur={setCommittedByCount} minValue={0} />
                      </Grid>
                    </Grid>
                    <Grid container item direction='column' spacing={2}>
                      <Grid item>
                        <li>How many were specifically regarding (relating to current/key issues): </li>
                      </Grid>
                      <Grid container item direction='column' spacing={2}>
                        <NumberFieldsGroup inputs={currentIssues} value={currentIssuesCount} onBlur={setCurrentIssuesCount} minValue={0} />
                      </Grid>
                    </Grid>
                  </Grid>
                </ol>
              </Grid>
              <Divider />
              <Grid container item direction='column' spacing={2}>
                <Grid item>
                  <li>What number of your clients identify the following as their impairment / condition?  </li>
                </Grid>
                <Grid container item direction='column' spacing={2}>
                  <NumberFieldsGroup inputs={impairments} value={impairmentCount} onBlur={setImpairmentCount} minValue={0} />
                </Grid>
              </Grid>
              <Divider />
              <Grid container item direction='column' spacing={2}>
                <Grid item>
                  <Typography>
                    In filling out the below, please be conscious of confidentiality and GDPR guidelines,
                    keep the case study anonymous and avoid personalised details that could lead to individuals being identified.
                  </Typography>
                  <Typography>
                    For the case studies below, please include the length of time taken with the client
                    and if you feel your support improved their awareness / knowledge of rights, confidence, feelings of safety, of being listened to, feeling less isolated.
                    Please also include what other services within your DDPO the client accessed, or any other services you signposted / referred to.
                  </Typography>
                </Grid>
                <Grid item>
                  <li>Brief case study highlighting emotional impact of Disability Hate Crime and / or challenges / positives dealing with Police / CPS</li>
                </Grid>
                <Grid item>
                  <BigTextBox label='Case Study (Up to 300 words)' value={emotionalImpactCS} onBlur={setEmotionalImpactCS} validate={validWordCount} />
                </Grid>
              </Grid>
              <Grid container item direction='column' spacing={2}>
                <Grid item>
                  <li>Brief case study highlighting achieving positive outcomes without a report to police</li>
                </Grid>
                <Grid item>
                  <BigTextBox label='Case Study (Up to 300 words)' value={outcomesCS} onBlur={setOutcomesCS} validate={validWordCount} />
                </Grid>
              </Grid>
              <Divider />
              <Grid item>
                <Button type='submit' variant='contained' color='primary' size='large'>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </ol>
        </form>
      </Grid>
    </Grid>
  );
});

export default Form;
