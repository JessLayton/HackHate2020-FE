/* eslint-disable camelcase */
import { postForm } from '../../../connections/DatabaseService';

const getChecked = (keys) => {
  const checked = [];
  keys.forEach((key) => {
    if (key.isChecked) {
      checked.push(key.label);
    }
  });
  return checked;
};

const getQuarterValue = (quarter) => {
  switch (quarter.name) {
    case 'January - March':
      return 1;
    case 'April - June':
      return 2;
    case 'July - September':
      return 3;
    case 'October - December':
      return 4;
    default:
      throw new Error(`Invalid quarter entry: ${quarter}`);
  }
};

const constructForm = async (
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
  intersectionalCrimesCount,
  typeOfDemographicDataAvailable,
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
  emotionalImpactCaseStudy,
  outcomesCaseStudy,
) => {
  const formData = {
    quarter: getQuarterValue(quarter),
    year: year.getFullYear(),
    nameDdpo: organisation.name,
    boroughsCovered: getChecked(boroughs),
    referrals: referralsCount,
    reportingDetails: reportingCount,
    ongoingDetails: ongoingCount,
    typeOfTimeDataAvailable: getChecked(typeOfTimeDataAvailable),
    timeSpentNumerical: typeOfTimeDataAvailable.find((info) => info.key === 'numerical').isChecked ? timeSpentNumerical : 0,
    timeSpentInfo: typeOfTimeDataAvailable.find((info) => info.key === 'narrative').isChecked ? timeSpentInfo : '',
    isWaitingList,
    waitingListCount: isWaitingList === 'yes' ? waitingListCount : 0,
    supportProvided: supportCount,
    unreportedCases: unreportedCaseCount,
    intersectional: intersectionalCrimesCount,
    typeOfDemographicDataAvailable: getChecked(typeOfDemographicDataAvailable),
    age: typeOfDemographicDataAvailable.find((info) => info.label === 'Age').isChecked ? ageCount : {},
    ethnicity: typeOfDemographicDataAvailable.find((info) => info.label === 'Ethnicity').isChecked ? ethnicityCount : {},
    gender: typeOfDemographicDataAvailable.find((info) => info.label === 'Sex and Gender Identity').isChecked ? genderCount : {},
    orientation: typeOfDemographicDataAvailable.find((info) => info.label === 'Sexual Orientation').isChecked ? orientationsCount : {},
    where: whereCount,
    hateCrime: hateCrimeCount,
    committedBy: committedByCount,
    currentIssues: currentIssuesCount,
    impairments: impairmentCount,
    keyIssuesPara,
    emotionalImpactCaseStudy,
    outcomesCaseStudy,
  };
  return postForm(formData);
};

export default constructForm;
