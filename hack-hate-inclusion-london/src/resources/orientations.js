import createInitialState from "../components/form/InitialState"

const orientations = [
  { label: "Heterosexual", key: "heterosexual" },
  { label: "Homosexual or lesbian", key: "homosexual"  },
  { label: "Bi-sexual", key: "bisexual"  },
  { label: "Other", key: "other"  },
];

export const initialisedOrientations = createInitialState(orientations);

export default orientations;
