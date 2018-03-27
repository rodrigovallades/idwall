export const localStorageState = {
  save,
  load
};

function load() {
  try {
    const serializeState = localStorage.getItem('state');
    return (serializeState === null) ? undefined : JSON.parse(serializeState);
  } catch (err) {
    return undefined;
  }
};

function save(state) {
  try {
    const serializeState = JSON.stringify(state);
    localStorage.setItem('state', serializeState)
  } catch (err) {
    //
  }
}
