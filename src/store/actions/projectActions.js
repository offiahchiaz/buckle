export const createProject = (project) => {
  return (dispatch, getState) => {
    // make async call to datatbase
    dispatch({ type: 'CREATE_PROJECT', project });
  }

}