const createInitialState = (resources) => {
  const initialState = {};
  resources.forEach((resource) => {
    initialState[resource.key] = 0;
  });
  return initialState;
};

export default createInitialState;
