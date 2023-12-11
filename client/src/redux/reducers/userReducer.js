import { GET_USER, DELETE_USER, UPDATE_USER } from "../actions/user.actions";

const initialState = {}

export default function userReducer(state = initialState, action) {

  switch(action.type) {
    case GET_USER:
        return action.payload

    case UPDATE_USER:
        return {
            ...state,
            name:action.payload
        }
    case DELETE_USER:
        return state.filter((user)=> user._id !== action.payload.userId)
        
    default:
        return state
  }
}
