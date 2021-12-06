import { postForm } from '../../../connections/DatabaseService';

const getCheckedBoroughs = (boroughs) => {
  const checkedBoroughs = [];
  boroughs.forEach((borough) => {
    if (borough.isChecked) {
      checkedBoroughs.push(borough.label);
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
  supportCount,
  unreportedCaseCount,
  intersectionalCrimesCount,
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
  emotionalImpactCaseStudy,
  outcomesCaseStudy,
) => {
  const formData = {
    quarter: getQuarterValue(quarter),
    year: year.getFullYear(),
    nameDdpo: organisation.name,
    boroughsCovered: getCheckedBoroughs(boroughs),
    referrals: referralsCount,
    reportingDetails: reportingCount,
    supportProvided: supportCount,
    unreportedCases: unreportedCaseCount,
    intersectional: intersectionalCrimesCount,
    age: ageCount,
    ethnicity: ethnicityCount,
    gender: genderCount,
    sex: sexCount,
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
