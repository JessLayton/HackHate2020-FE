/* eslint-disable camelcase */
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
  emotionalImpactCS,
  outcomesCS,
) => {
  const formData = {
    quarter: getQuarterValue(quarter),
    year: year.getFullYear(),
    name_ddpo: organisation.name,
    boroughs_covered: getCheckedBoroughs(boroughs),
    referrals: referralsCount,
    reporting_details: reportingCount,
    support_provided: supportCount,
    cases_not_police_report: unreportedCaseCount,
    intersectional: intersectionalCrimesCount,
    support_age: ageCount,
    ethnicity: ethnicityCount,
    gender: genderCount,
    sex: sexCount,
    orientation: orientationsCount,
    where: whereCount,
    hate_crime: hateCrimeCount,
    committed_by: committedByCount,
    current_issues: currentIssuesCount,
    impairments: impairmentCount,
    ddpo_short_paragraph: keyIssuesPara,
    casestudy_impact: emotionalImpactCS,
    casestudy_outcome: outcomesCS,
  };
  return postForm(formData);
};

export default constructForm;
