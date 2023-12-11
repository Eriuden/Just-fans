import axios from "axios"

export const GET_FAN = "GET_FAN"
export const GET_ALLFANS = "GET_ALLFANS"
export const GET_FAN_ERROR = "GET_FAN_ERROR"
export const ADD_FAN = "ADD_FAN"
export const UPDATE_FAN = "UPDATE_FAN"
export const DELETE_FAN = "DELETE_FAN"

export const getAllFans = () => {
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}api/fans`)
            .then((res)=> {
                dispatch({ type: GET_ALLFANS, payload: res.data})
            })
            .catch((err)=> window.alert(err))
    }
}

export const getFan = () => {
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}api/fans/:id`)
            .then((res)=> {
                dispatch({ type: GET_FAN, payload: res.data})
            })
            .catch((err)=> window.alert(err))
    }
}

export const addFan = (data) => {
    return (dispatch)=> {
        return axios 
            .post(`${process.env.REACT_APP_API_URL}api/fans`, data)
            .then((res)=> {
                if (res.data.errors) {
                    dispatch({ type: GET_FAN_ERROR, payload: res.data.errors})
                } else {
                    dispatch({ type: GET_FAN_ERROR, payload:""})
                }
            })
    }
}

export const updateFan = (
    fanId,
    picture,
    name,
    price
) => {
    return (dispatch) => {
        return axios({
            method:"put",
            url: `${process.env.REACT_APP_API_URL}api/fans/${fanId}`,
            data: {picture, name, price}
        })
        .then(()=> {
            dispatch({
                type: UPDATE_FAN,
                payload: { fanId, picture, name, price},
            })
        })
        .catch((err)=> window.alert(err))
    }
}

export const deleteFan = (
    fanId,
    picture,
    name,
    price
) => {
    return (dispatch)=> {
        return axios({
            method:'delete',
            url: `${process.env.REACT_APP_API_URL}api/fans/${fanId}`,
            data: { picture, name, price}
        })
            .then(()=> {
                dispatch({ type: DELETE_FAN, payload: { fanId}})
            })
            .catch(()=> window.alert(err))
    }
}