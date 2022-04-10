/* eslint-disable camelcase */
import { postForm } from '../../../connections/DatabaseService';

const getChecked = (keys) => {
  const checkedBoroughs = [];
  keys.forEach((key) => {
    if (key.isChecked) {
      checkedBoroughs.push(key.label);
    }
  });
  return checkedBoroughs;
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
    age: ageCount,
    ethnicity: ethnicityCount,
    gender: genderCount,
    orientation: orientationsCount,
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
