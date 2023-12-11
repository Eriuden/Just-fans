import { GET_ALLFANS } from "../actions/fan.actions";

const initialState = {}

export default function allFansReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALLFANS:
            return action.payload 
        default:
            return state
    }
}