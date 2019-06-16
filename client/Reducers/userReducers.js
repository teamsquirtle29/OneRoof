
import * as types from '../Constants/actionTypes';


const initialState = {
  username: '',
  password: '',
  role: '',
  userId: '',
  events: [],
  aptId: '',
  login: false
};

const userReducers = (state = initialState, action) => {

  switch(action.type) {
    case types.UPDATE_USERNAME:
      return {
        ...state,
        role: action.payload,
      }

    case types.UPDATE_PASSWORD:
      return {
        ...state,
        password: action.payload,
      }
    
    case types.UPDATE_LOGIN:
      return {
        ...state,
        userId: action.payload.userId,
        aptId: action.payload.aptId,
        password: '',
        role: action.payload.role,
        login: true,
      }
    
    case types.UPDATE_ROLE:
      return {
        ...state,
        role: action.payload,
      }
  }
}
export default userReducers;