import createInitialState from "../components/form/InitialState"

const boroughs = [
  { label: "Barking and Dagenham", isChecked: false },
  { label: "Barnet", isChecked: false },
  { label: "Bexley", isChecked: false },
  { label: "Brent", isChecked: false },
  { label: "Bromley", isChecked: false },
  { label: "Camden", isChecked: false },
  { label: "Croydon", isChecked: false },
  { label: "Ealing", isChecked: false },
  { label: "Enfield", isChecked: false },
  { label: "Greenwich", isChecked: false },
  { label: "Hackney", isChecked: false },
  { label: "Hammersmith and Fulham", isChecked: false },
  { label: "Haringey", isChecked: false },
  { label: "Harrow", isChecked: false },
  { label: "Havering", isChecked: false },
  { label: "Hillingdon", isChecked: false },
  { label: "Hounslow", isChecked: false },
  { label: "Islington", isChecked: false },
  { label: "Kensington upon Thames", isChecked: false },
  { label: "Lambeth", isChecked: false },
  { label: "Lewisham", isChecked: false },
  { label: "Merton", isChecked: false },
  { label: "Newham", isChecked: false },
  { label: "Redbridge", isChecked: false },
  { label: "Richmond upon Thames", isChecked: false },
  { label: "Southwark", isChecked: false },
  { label: "Sutton", isChecked: false },
  { label: "Tower Hamlets", isChecked: false },
  { label: "Waltham Forest", isChecked: false },
  { label: "Wandsworth", isChecked: false },
  { label: "Westminster", isChecked: false },
  {
    label:
      "City of London (Principal division, not a London borough)",
    isChecked: false,
  },
];
export const initialisedBoroughs = createInitialState(boroughs);

export default boroughs;
