import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import {
  Button, Grid, Typography,
} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

import constructForm from './constructForm/constructForm';
import Brief from './Brief';
import AutocompleteField from './textfields/AutocompleteField';
import YearPicker from './YearPicker';
import Checkboxes from './OrganisationCheckboxes';
import NumberFieldsGroup from './numberfields/NumberFieldsGroup';
import BigTextBox from './textfields/BigTextBox';
import ScrollUp from './ScrollUp';
import SnackbarStore from '../../snackbar/SnackbarStore';
import DDPOStore from '../ddpo/DDPOStore';

import ethnicities, { initialisedEthnicities } from '../../resources/ethnicities';
import referralsAndEnquiries, { initialisedReferralsAndEnquiries } from '../../resources/referralsAndEnquiries';
import reportingDetails, { initialisedReportingDetails } from '../../resources/reportingDetails';
import ongoingDetails, { initialisedOngoingDetails } from '../../resources/ongoingDetails';

import supportTypes, { initialisedSupportTypes } from '../../resources/supportTypes';
import unreportedCases, { initialisedUnreportedCases } from '../../resources/unreportedCases';
import intersectionalCrimes, { initialisedIntersectionalCrimes } from '../../resources/intersectionalCrime';
import ageGroups, { initialisedAgeGroups } from '../../resources/ageGroups';
import yearQuarters from '../../resources/yearQuarters';
import impairments, { initialisedImpairments } from '../../resources/impairments';
import genders, { initialisedGenders } from '../../resources/gender';
import orientations, { initialisedOrientations } from '../../resources/orientations';
import whereDetails, { initialisedWhereDetails } from '../../resources/whereDetails';
import hateCrime, { initialisedHateCrime } from '../../resources/hateCrime';
import committedBy, { initialisedCommittedBy } from '../../resources/commitedBy';
import currentIssues, { initialisedCurrentIssues } from '../../resources/currentIssues';

import boroughsList from '../../resources/boroughs';
import timeInfoType from '../../resources/timeInfoType';
import ConfirmGDPR from './ConfirmGDPR';
import DemographicInfo from './DemographicInfo';
import WaitingList from './WaitingList';
import TimeSpentCheckboxes from './TimeSpentCheckboxes';

const Form = observer(() => {
  const [quarter, setQuarter] = React.useState('');
  const [year, setYear] = React.useState(new Date());
  const [organisation, setOrganisation] = React.useState('');
  const [boroughs, setBoroughs] = React.useState(boroughsList);
  const [referralsCount, setReferralsCount] = React.useState(initialisedReferralsAndEnquiries);
  const [reportingCount, setReportingCount] = React.useState(initialisedReportingDetails);
  const [ongoingCount, setOngoingCount] = React.useState(initialisedOngoingDetails);
  const [typeOfTimeDataAvailable, setTypeOfTimeDataAvailable] = React.useState(timeInfoType);
  const [timeSpentNumerical, setTimeSpentNumerical] = React.useState(0);
  const [timeSpentInfo, setTimeSpentInfo] = React.useState('');
  const [waitingListCount, setWaitingListCount] = React.useState(0);
  const [supportCount, setSupportCount] = React.useState(initialisedSupportTypes);
  const [unreportedCaseCount, setUnreportedCaseCount] = React.useState(initialisedUnreportedCases);
  const [intersectionCrimesCount, setIntersectionalCrimesCount] = React.useState(initialisedIntersectionalCrimes);
  const [ageCount, setAgeCount] = React.useState(initialisedAgeGroups);
  const [ethnicityCount, setEthnicityCount] = React.useState(initialisedEthnicities);
  const [genderCount, setGenderCount] = React.useState(initialisedGenders);
  const [orientationsCount, setOrientationCount] = React.useState(initialisedOrientations);
  const [whereCount, setWhereCount] = React.useState(initialisedWhereDetails);
  const [hateCrimeCount, setHateCrimeCount] = React.useState(initialisedHateCrime);
  const [committedByCount, setCommittedByCount] = React.useState(initialisedCommittedBy);
  const [currentIssuesCount, setCurrentIssuesCount] = React.useState(initialisedCurrentIssues);
  const [impairmentCount, setImpairmentCount] = React.useState(initialisedImpairments);
  const [keyIssuesPara, setKeyIssuesPara] = React.useState('');
  const [emotionalImpactCS, setEmotionalImpactCS] = React.useState('');
  const [outcomesCS, setOutcomesCS] = React.useState('');
  const [gdprConfirmed, setGdprConfirmed] = React.useState('no');
  const [isWaitingList, setIsWaitingList] = React.useState('no');

  const history = useHistory();

  const validWordCount = (entry) => (entry.split(' ').filter((word) => word !== '').length <= 300);

  const validateForm = () => {
    const invalidQuestions = [];
    if (!validWordCount(keyIssuesPara)) {
      invalidQuestions.push(7);
    }
    if (!validWordCount(emotionalImpactCS) || !validWordCount(outcomesCS)) {
      invalidQuestions.push(16);
    }
    return { valid: invalidQuestions.length === 0, invalidQuestions };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formIsValid = validateForm();
    if (gdprConfirmed === 'no') {
      SnackbarStore.showError('You must read and agree to the conditions above before submitting the form');
    } else if (formIsValid.valid) {
      let success;
      try {
        success = await constructForm(
          quarter,
          year,
          organisation,
          boroughs,
          referralsCount,
          reportingCount,
          ongoingCount,
          typeOfTimeDataAvailable,
          timeSpentNumerical,
          timeSpentInfo,
          isWaitingList,
          waitingListCount,
          supportCount,
          unreportedCaseCount,
          intersectionCrimesCount,
          ageCount,
          ethnicityCount,
          genderCount,
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
      <Grid item xs={11} sm={10}>
        <ScrollUp />
        <Grid container direction='column' spacing={3}>
          <Grid item>
            <Brief />
          </Grid>
          <Grid item>
            <form onSubmit={handleSubmit}>
              <Grid container direction='column' spacing={2}>
                <Grid item>
                  <ConfirmGDPR gdprConfirmed={gdprConfirmed} setGdprConfirmed={setGdprConfirmed} />
                </Grid>
                <Grid item>
                  <ol>
                    <li>
                      <Grid container direction='column' spacing={2}>
                        <Grid item>
                          <Typography variant='subtitle1'>
                            Time Period (Quarterly)
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Grid container direction='row' spacing={2}>
                            <Grid item>
                              <AutocompleteField options={yearQuarters} onChange={setQuarter} required label='Quarter' />
                            </Grid>
                            <Grid item>
                              <YearPicker value={year} onChange={setYear} required />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Divider />
                        </Grid>
                      </Grid>
                    </li>
                    <li>
                      <Grid container direction='column' spacing={2}>
                        <Grid item>
                          <Typography variant='subtitle1'>
                            Name of DDPO
                          </Typography>
                        </Grid>
                        <Grid item>
                          <AutocompleteField
                            options={DDPOStore.ddpos}
                            onChange={setOrganisation}
                            required
                            label='DDPO'
                            helperText={(
                              <Link to='/ddpo'>Don&apos;t see your DDPO? Click here to add a DDPO</Link>
                            )}
                          />
                        </Grid>
                        <Grid item>
                          <Divider />
                        </Grid>
                      </Grid>
                    </li>
                    <li>
                      <Grid container direction='column' spacing={2}>
                        <Grid item>
                          <Checkboxes checkedItems={boroughs} onChange={setBoroughs} />
                        </Grid>
                        <Grid item>
                          <Divider />
                        </Grid>
                      </Grid>
                    </li>
                    <li>
                      <Grid container direction='column' spacing={2}>
                        <Grid item>
                          <Typography variant='subtitle1'>
                            Details of referrals / enquiries during this quarter
                          </Typography>
                        </Grid>
                        <Grid item>
                          <NumberFieldsGroup inputs={referralsAndEnquiries} value={referralsCount} onBlur={setReferralsCount} minValue={0} />
                        </Grid>
                        <Grid item>
                          <Divider />
                        </Grid>
                      </Grid>
                    </li>
                    <li>
                      <Grid container direction='column' spacing={2}>
                        <Grid item>
                          <TimeSpentCheckboxes
                            typeOfTimeDataAvailable={typeOfTimeDataAvailable}
                            setTypeOfTimeDataAvailable={setTypeOfTimeDataAvailable}
                            timeSpentNumerical={timeSpentNumerical}
                            setTimeSpentNumerical={setTimeSpentNumerical}
                            timeSpentInfo={timeSpentInfo}
                            setTimeSpentInfo={setTimeSpentInfo}
                          />
                        </Grid>
                        <Grid item>
                          <Divider />
                        </Grid>
                      </Grid>
                    </li>
                    <li>
                      <Grid container direction='column' spacing={2}>
                        <Grid item>
                          <Typography variant='subtitle1'>
                            Details of ongoing work during this quarter
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant='caption'>
                            Please only count work carrying over from previous quarters in this small section.
                          </Typography>
                        </Grid>
                        <Grid item>
                          <NumberFieldsGroup inputs={ongoingDetails} value={ongoingCount} onBlur={setOngoingCount} />
                        </Grid>
                      </Grid>
                      <Grid container direction='column' spacing={2}>
                        <Grid item>
                          <WaitingList
                            isWaitingList={isWaitingList}
                            setIsWaitingList={setIsWaitingList}
                            waitingListCount={waitingListCount}
                            setWaitingListCount={setWaitingListCount}
                          />
                        </Grid>
                      </Grid>
                      <Grid container direction='column' spacing={2}>
                        <Grid item>
                          <Divider />
                        </Grid>
                      </Grid>
                    </li>
                    <li>
                      <Grid container direction='column' spacing={2}>
                        <Grid item>
                          <Typography variant='subtitle1'>
                            Details of reporting during this quarter
                          </Typography>
                        </Grid>
                        <Grid item>
                          <NumberFieldsGroup inputs={reportingDetails} value={reportingCount} onBlur={setReportingCount} minValue={0} />
                        </Grid>
                        <Grid item>
                          <Divider />
                        </Grid>
                      </Grid>
                    </li>
                    <li>
                      <Grid container direction='column' spacing={2}>
                        <Grid item>
                          <Typography variant='subtitle1'>
                            For DDPOs who are not collecting the data outlined below,
                            please provide a short paragraph (up to 300 words) highlighting key issues, challenges / positive outcomes.
                          </Typography>
                        </Grid>
                        <Grid item>
                          <BigTextBox label='Key issues/outcomes (300 words max)' value={keyIssuesPara} onBlur={setKeyIssuesPara} validate={validWordCount} />
                        </Grid>
                        <Grid item>
                          <Divider />
                        </Grid>
                      </Grid>
                    </li>
                    <li>
                      <Grid container direction='column' spacing={2}>
                        <Grid item>
                          <Typography variant='subtitle1'>
                            Type of support provided - Please provide a number for each Hate Crime Support
                          </Typography>
                        </Grid>
                        <Grid item>
                          <NumberFieldsGroup inputs={supportTypes} value={supportCount} onBlur={setSupportCount} minValue={0} />
                        </Grid>
                        <Grid item>
                          <Divider />
                        </Grid>
                      </Grid>
                    </li>
                    <li>
                      <Grid container direction='column' spacing={2}>
                        <Grid item>
                          <Typography variant='subtitle1'>
                            For cases not reported to police, please indicate main reasons why - Please provide a number for each
                          </Typography>
                        </Grid>
                        <Grid item>
                          <NumberFieldsGroup inputs={unreportedCases} value={unreportedCaseCount} onBlur={setUnreportedCaseCount} minValue={0} />
                        </Grid>
                        <Grid item>
                          <Divider />
                        </Grid>
                      </Grid>
                    </li>
                    <li>
                      <Grid container direction='column' spacing={2}>
                        <Grid item>
                          <Typography variant='subtitle1'>
                            Intersectionality and Disability Hate Crime:
                            Please indicate how many people you supported felt the hate crime targeted another aspect of their identity and was also a:
                          </Typography>
                        </Grid>
                        <Grid item>
                          <NumberFieldsGroup inputs={intersectionalCrimes} value={intersectionCrimesCount} onBlur={setIntersectionalCrimesCount} minValue={0} />
                        </Grid>
                        <Grid item>
                          <Divider />
                        </Grid>
                      </Grid>
                    </li>
                    <Grid item>
                      <DemographicInfo />
                    </Grid>
                    <li>
                      <Grid container direction='column' spacing={2}>
                        <Grid item>
                          <Typography variant='subtitle1'>
                            Age of victims being supported - Please provide a number
                          </Typography>
                        </Grid>
                        <Grid item>
                          <NumberFieldsGroup inputs={ageGroups} value={ageCount} onBlur={setAgeCount} minValue={0} />
                        </Grid>
                      </Grid>
                    </li>
                    <li>
                      <Grid container direction='column' spacing={2}>
                        <Grid item>
                          <Typography variant='subtitle1'>
                            Ethnicity of victims being supported - Please provide a number
                          </Typography>
                        </Grid>
                        <Grid item>
                          <NumberFieldsGroup inputs={ethnicities} value={ethnicityCount} onBlur={setEthnicityCount} minValue={0} />
                        </Grid>
                        <Grid item>
                          <Divider />
                        </Grid>
                      </Grid>
                    </li>
                    <li>
                      <Grid container direction='column' spacing={2}>
                        <Grid item>
                          <Typography variant='subtitle1'>
                            What number of your clients are:
                          </Typography>
                        </Grid>
                        <Grid item>
                          <ol type='a'>
                            <li>
                              <NumberFieldsGroup inputs={orientations} value={orientationsCount} onBlur={setOrientationCount} minValue={0} />
                            </li>
                            <li>
                              <NumberFieldsGroup inputs={genders} value={genderCount} onBlur={setGenderCount} minValue={0} />
                            </li>
                          </ol>
                        </Grid>
                        <Grid item>
                          <Divider />
                        </Grid>
                      </Grid>
                    </li>
                    <li>
                      <Grid container direction='column' spacing={2}>
                        <Grid item>
                          <Typography variant='subtitle1'>
                            Details of where the hate crime occurred, the actions involved, and what they were regarding?
                            (This is to highlight the multiple issues a victim can experience)
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant='subtitle1'>
                            As with the previous questions, these are all optional. Please provide information where you can
                            as this is appreciated and valuable, whether you can answer one question or many.
                          </Typography>
                        </Grid>
                        <Grid item>
                          <ol type='a'>
                            <li>
                              <Grid container direction='column' spacing={2}>
                                <Grid item>
                                  Where the hate crime occurred:
                                </Grid>
                                <Grid item>
                                  <NumberFieldsGroup inputs={whereDetails} value={whereCount} onBlur={setWhereCount} minValue={0} />
                                </Grid>
                              </Grid>
                            </li>
                            <li>
                              <Grid container direction='column' spacing={2}>
                                <Grid item>
                                  Form of hate crime:
                                </Grid>
                                <Grid item>
                                  <NumberFieldsGroup inputs={hateCrime} value={hateCrimeCount} onBlur={setHateCrimeCount} minValue={0} />
                                </Grid>
                              </Grid>
                            </li>
                            <li>
                              <Grid container direction='column' spacing={2}>
                                <Grid item>
                                  The Hate crime was committed by:
                                </Grid>
                                <Grid item>
                                  <NumberFieldsGroup inputs={committedBy} value={committedByCount} onBlur={setCommittedByCount} minValue={0} />
                                </Grid>
                              </Grid>
                            </li>
                            <li>
                              <Grid container direction='column' spacing={2}>
                                <Grid item>
                                  How many were specifically regarding (relating to current/key issues):
                                </Grid>
                                <Grid item>
                                  <NumberFieldsGroup inputs={currentIssues} value={currentIssuesCount} onBlur={setCurrentIssuesCount} minValue={0} />
                                </Grid>
                              </Grid>
                            </li>
                          </ol>
                        </Grid>
                        <Grid item>
                          <Divider />
                        </Grid>
                      </Grid>
                    </li>
                    <li>
                      <Grid container direction='column' spacing={2}>
                        <Grid item>
                          <Typography variant='subtitle1'>
                            What number of your clients identify the following as their impairment / condition / disability?
                          </Typography>
                        </Grid>
                        <Grid item>
                          <NumberFieldsGroup inputs={impairments} value={impairmentCount} onBlur={setImpairmentCount} minValue={0} />
                        </Grid>
                        <Grid item>
                          <Divider />
                        </Grid>
                      </Grid>
                    </li>
                    <li>
                      <Grid container direction='column' spacing={2}>
                        <Grid item>
                          <Typography variant='subtitle1'>
                            Case studies
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography>
                            In filling out the below, please be conscious of confidentiality and GDPR guidelines,
                            keep the case study anonymous and avoid personalised details that could lead to individuals being identified.
                          </Typography>
                          <Typography>
                            For the case studies below, please include the length of time taken with the client
                            and if you feel your support improved their awareness / knowledge of rights, confidence,
                            feelings of safety, of being listened to, feeling less isolated.
                            Please also include what other services within your DDPO the client accessed, or any other services you signposted / referred to.
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <ol type='a'>
                          <li>
                            <Grid container direction='column' spacing={2}>
                              <Grid item>
                                Brief case study highlighting emotional impact of Disability Hate Crime and / or challenges / positives dealing with Police / CPS
                              </Grid>
                              <Grid item>
                                <BigTextBox label='Case Study (Up to 300 words)' value={emotionalImpactCS} onBlur={setEmotionalImpactCS} validate={validWordCount} />
                              </Grid>
                            </Grid>
                          </li>
                          <li>
                            <Grid container direction='column' spacing={2}>
                              <Grid item>
                                Brief case study highlighting achieving positive outcomes without a report to police
                              </Grid>
                              <Grid item>
                                <BigTextBox label='Case Study (Up to 300 words)' value={outcomesCS} onBlur={setOutcomesCS} validate={validWordCount} />
                              </Grid>
                            </Grid>
                          </li>
                        </ol>
                      </Grid>
                    </li>
                  </ol>
                </Grid>
                <Grid item>
                  <Divider />
                </Grid>
                <Grid item>
                  <Button type='submit' variant='contained' color='primary' size='large'>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
});

export default Form;
