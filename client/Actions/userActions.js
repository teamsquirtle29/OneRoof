import * as types from "../Constants/actionTypes"
import axios from 'axios';

export const updateUsername = (value) => ({
  type: types.UPDATE_USERNAME,
  payload: value
})

export const updateApt = (value) => ({
  type: types.UPDATE_APT,
  payload: value
})

export const updatePassword = (value) => ({
  type: types.UPDATE_PASSWORD,
  payload: value
})

export const updateLogin = (data) => ({
  type: types.UPDATE_LOGIN,
  payload: data
})

export const updateRole = (value) => ({
  type: types.UPDATE_ROLE,
  payload: value
})


// on sign up, a post request is sent/stored into our database. 
// will return data of apt_id, name, pwd, and role
export function signup () {
  return (dispatch, getState) => {
    const url = '/user'
    const state = getState();
    const body = {
      "name": state.user.username,
      "pwd": state.user.password,
      "role": state.user.role,
      "apt_id": state.user.apt
    }
    console.log(body);
    return axios.post(url, body)
      .then(response => {
        return response.data
      }).then(data => {
        console.log(data)
        let userData = {
          userId: data[0]['_id'],
          aptId: state.user.username,
          role: state.user.role
        }
        dispatch({
          type: types.UPDATE_LOGIN,
          payload: userData
        })
      })
    } 
}

// when signed in, we will send a post request to our database
// will return data of apt_id, name, pwd, user_id, and role
export function signIn () {
  return (dispatch, getState) => {
    const url = '/user'
    const state = getState();
    // const header = {
    //   "name": state.user.username,
    //   "pwd": state.user.password
    // }
    //console.log(header);
    return axios.get(url, {
      headers: {
        "name": state.user.username,
        "pwd": state.user.password
      }
    })
      .then(response => {
        //console.log(response);
        let userData = {
          "userId": response.data[0]['_id'],
          "aptId": response.data[0]['apt_id'],
          "role": response.data[0]['role']
        }
        dispatch({
          type: types.UPDATE_LOGIN,
          payload: userData
        })
      })
    } 
}

