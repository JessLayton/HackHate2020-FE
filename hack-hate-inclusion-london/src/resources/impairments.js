import createInitialState from "../components/form/constructForm/InitialState"

const impairments = [
  { label: "Physical", key: "physical"  },
  { label: "Cognitive", key: "cognitive"  },
  { label: "Sensory", key: "sensory"  },  
  { label: "Learning Difficulties", key: "learning_difficulties"  },  
  { label: "Neuro Diverse", key: "neurodiverse"  },  
  { label: "Deaf", key: "deaf"  },  
  { label: "Deafened / hard of hearing", key: "hoh"  },  
  { label: "Mental health issues", key: "mental_health"  },  
  { label: "Long-term issues", key: "long_term"  },  
  { label: "Other", key: "other"  },  
];

export const initialisedImpairments = createInitialState(impairments);

export default impairments;
