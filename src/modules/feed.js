import dogsConstants from '../constants/dogs.constants'
import * as dogService from '../services/dogs.service';

const initialState = { dogs: {}, selectedId: '', selectedImg: '' };

export default (state = initialState, action) => {
  switch (action.type) {
    case dogsConstants.DOGS_REQUEST:
      return {
        ...state,
        dogs: {}
      };
    case dogsConstants.DOGS_SUCCESS:
      return {
        ...state,
        dogs: action.dogs
      };
    case dogsConstants.DOGS_FAILURE:
      return {
        ...state,
        dogs: {}
      };
    case dogsConstants.DOGS_PICTURE:
      return {
        ...state,
        selectedId: action.selected.id,
        selectedImg: action.selected.dog,
      };
    default:
      return state
  }
}

export const getDogs = (token, category) => {
  return dispatch => {
    dispatch(request({ token }));

    dogService.get(token, category)
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

    function request(token) { return { type: dogsConstants.DOGS_REQUEST, token } }
    function success(dogs) { return { type: dogsConstants.DOGS_SUCCESS, dogs } }
    function failure(error) { return { type: dogsConstants.DOGS_FAILURE, error } }
  }
}

export const getPicture = (id, dog) => {
  return dispatch => {
    dispatch(request({ id, dog }));
    function request(selected) { return { type: dogsConstants.DOGS_PICTURE, selected } }
  }
}
