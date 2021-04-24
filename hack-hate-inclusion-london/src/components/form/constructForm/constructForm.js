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

export const constructForm = async (
  quarter,
  year,
  organisation,
  boroughs,
  referralsCount,
  supportCount,
  unreportedCaseCount,
  ethnicityCount,
  genderCount,
  sexCount,
  orientationsCount,
  impairmentCount,
  caseAttributeCount,
  ageCount,
  keyIssuesPara,
  emotionalImpactCS,
  outcomesCS
) => {
  const { cases_reported, cases_not_reported, hate_crime_cases, self, from_authorities } = referralsCount;
  const formData = {
    quarter: getQuarterValue(quarter),
    year: year.getFullYear(),
    name_ddpo: organisation.name,
    boroughs_covered: getCheckedBoroughs(boroughs),
    hate_crime_cases,
    cases_reported,
    cases_not_reported,
    referrals: { self, from_authorities },
    support_provided: supportCount,
    cases_not_police_report: unreportedCaseCount,
    ethnicity: ethnicityCount,
    gender: genderCount,
    sex: sexCount,
    orientation: orientationsCount,
    impairments: impairmentCount,
    cases_related_to: caseAttributeCount,
    support_age: ageCount,
    ddpo_short_paragraph: keyIssuesPara,
    casestudy_impact: emotionalImpactCS,
    casestudy_outcome: outcomesCS,
  };
  console.log(formData);
  return await postForm(formData);
};
