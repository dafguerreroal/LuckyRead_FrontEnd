
import API from '../api';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER } from './types';



export function setCurrentUser(user){
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('user');
    console.log('en funcion logout');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
}

export function login(auth) {
  return dispatch => {
    return API.post('/api/login', auth)
    .then( res=>{
        //console.log(res);
        const token = res.data.jwt;
        const user = res.data.username;
        localStorage.setItem('jwtToken', token);
        localStorage.setItem('user', user);
        setAuthorizationToken(token);
        dispatch(setCurrentUser(jwtDecode(token)));
        return res
    }).catch(function(error){
      const response = error.response
      console.log('login fallido');
      return response
    })
  }
}

export function login_social(token, user) {
  return dispatch => {
    localStorage.setItem('jwtToken', token);
    localStorage.setItem('user', user);
    setAuthorizationToken(token);
    dispatch(setCurrentUser(jwtDecode(token)));
  }
}
