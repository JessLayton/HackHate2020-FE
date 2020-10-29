import createInitialState from "../components/form/InitialState"

const DDPOs = [
  { value: "Beans society" },
  { value: "Little Alex Horne fund" },
  { value: "Help - need cheese" },
  { value: "There will be cake" },
  { value: "Association of marmite haters" },
  { value: "Sausages" },
];

export const initialisedDDPOs = createInitialState(DDPOs);

export default DDPOs;
