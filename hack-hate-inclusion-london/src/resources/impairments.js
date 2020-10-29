import createInitialState from "../components/form/InitialState"

const impairments = [
  { label: "Physical" },
  { label: "Cognitive" },
  { label: "Sensory" },  
  { label: "Learning Difficulties" },  
  { label: "Neuro Diverse" },  
  { label: "Deaf" },  
  { label: "Deafened / hard of hearing" },  
  { label: "Mental health issues" },  
  { label: "Long-term issues" },  
  { label: "Other" },  
];

export const initialisedImpairments = createInitialState(impairments);

export default impairments;
