import { GET_FAN_ERROR } from "../actions/fan.actions";

const initialState = {}

export default function errorReducer(state = initialState, action) {
    switch (action.type) {
        case GET_FAN_ERROR:
            return {
                fanError: action.payload
            }
    
        default:
            return state
    }
}