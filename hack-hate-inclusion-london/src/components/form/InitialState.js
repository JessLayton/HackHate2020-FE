const createInitialState = (resources) => {
    let initialState = {};
    console.log("BIGGER SAD ********************");
    resources.forEach((resource) => {
      initialState[resource.label] = 0;
    });
    return initialState;
  };

  export default createInitialState;