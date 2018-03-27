import dogsConstants from '../constants/dogs.constants'

export const get = (token, category) => {
  const requestOptions = {
    method: 'GET',
    headers: new Headers({
      'Authorization': token,
      'Content-Type': 'application/json'
    })
  };

  return fetch(`${dogsConstants.DOGS_API}?category=${category}`, requestOptions)
    .then(response => {
      if (!response.ok) {
        return Promise.reject(response.statusText);
      }
      return response.json();
    })
    .then(user => {
      // login successful if there's a jwt token in the response
      if (user && user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
      }
      return user;
    });
}
