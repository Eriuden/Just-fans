import { UPDATE_FAN, DELETE_FAN, GET_FAN } from "../actions/fan.actions";

const initialState = {}

export default function fanReducer(state = initialState, action) {
    switch(action.type) {
        case GET_FAN:
            return action.payload
        
        case UPDATE_FAN:
            return state.map((fan)=> {
                if (fan._id === action.payload.fanId) {
                    return {
                        ...fan,
                        name: action.payload.name,
                        price: action.payload.price 
                    }
                } else return fan
            })
        case DELETE_FAN:
            return state.filter((fan)=> fan._id !== action.payload.fanId) 
            
        default:
            return state   
    }
}