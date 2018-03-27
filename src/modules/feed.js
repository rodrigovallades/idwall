import dogsConstants from '../constants/dogs.constants'
import * as dogService from '../services/dogs.service';

const initialState = { dogs: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case dogsConstants.DOGS_REQUEST:
      return state;
    case dogsConstants.DOGS_SUCCESS:
      return {
        ...state,
        dogs: action.dogs
      };
    case dogsConstants.DOGS_FAILURE:
      return {
        ...state,
        dogs: []
      };
    default:
      return state
  }
}

export const getDogs = token => {

  return dispatch => {
    dispatch(request({ token }));

    dogService.get(token)
      .then(
        dogs => {
          console.log(dogs)
          dispatch(success(dogs));
        },
        error => {
          console.log(error)
          dispatch(failure(error));
        }
      );

    function request(user) { return { type: dogsConstants.DOGS_REQUEST, user } }
    function success(dogs) { return { type: dogsConstants.DOGS_SUCCESS, dogs } }
    function failure(error) { return { type: dogsConstants.DOGS_FAILURE, error } }
  }
}
