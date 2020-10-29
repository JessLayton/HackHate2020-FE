const createInitialState = (resources) => {
  let initialState = {};
  resources.forEach((resource) => {
    initialState[resource.label] = 0;
  });
  return initialState;
};

export default createInitialState;
