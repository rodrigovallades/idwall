import userConstants from '../constants/user.constants'
import * as userService from '../services/user.service';

let userToken = JSON.parse(localStorage.getItem('user'));
const initialState = userToken ? { userToken } : { userToken: '' };

export default (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        logging: true,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        logging: false,
        userToken: action.user.user.token
      };
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        logging: false,
        userToken: ''
      };
    default:
      return state
  }
}

export const login = email => {

  return dispatch => {
    dispatch(request({ email }));

    userService.login(email)
      .then(
        user => {
          console.log(user)
          dispatch(success(user));
        },
        error => {
          console.log(error)
          dispatch(failure(error));
        }
      );

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
  }
}
