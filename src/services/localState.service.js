export const load = () => {
  try {
    const serializeState = localStorage.getItem('state');
    return (serializeState === null) ? undefined : JSON.parse(serializeState);
  } catch (err) {
    return undefined;
  }
};

export const save = state => {
  try {
    const serializeState = JSON.stringify(state);
    localStorage.setItem('state', serializeState)
  } catch (err) {
    //
  }
}
