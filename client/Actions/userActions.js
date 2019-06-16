import * as types from "../constants/actionTypes"
import axios from 'axios';

export const updateUsername = (value) => ({
  type: types.UPDATE_USERNAME,
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

export const updateRole = (data) => ({
  type: types.UPDATE_ROLE,
  payload: data
})

// on sign up, a post request is sent/stored into our database. 
// will return data of apt_id, name, pwd, and role
export function signup () {
  return (dispatch, getState) => {
    const url = '/user'
    const state = getState();
    const body = {
      username: state.auth.username,
      password: state.auth.password,
      role: state.auth.role,
      aptNum: state.auth.aptNum
    }
    console.log(body);
    return axios.post(url, body)
      .then(response => {
        return response.data
      }).then(data => {
        console.log(data)
        let userData = {
          userId: data.rows[0]['_id'],
          aptId: data.rows[0]['apt_id'],
          role: data.rows[0]['role']
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
    const header = {
      username: state.auth.username,
      password: state.auth.password
    }
    console.log(body);
    return axios.get(url, {
      headers: header
    })
      .then(response => {
        return response.data
      }).then(data => {
        console.log(data)
        let userData = {
          userId: data.rows[0]['_id'],
          aptId: data.rows[0]['apt_id'],
          role: data.rows[0]['role']
        }
        dispatch({
          type: types.UPDATE_LOGIN,
          payload: userData
        })
      })
    } 
}