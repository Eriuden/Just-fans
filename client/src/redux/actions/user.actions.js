import axios from "axios"

export const GET_USER = "GET_USER"
export const UPDATE_USER = "UPDATE_USER"
export const UPDATE_PASSWORD = "UPDATE_PASSWORD"
export const DELETE_USER = "DELETE_USER"

export const getUser = (uid)=> {
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}api/users/${uid}`)
            .then((res)=> {
                dispatch(({type: GET_USER, payload: res.data}))
            })
            .catch((err)=> window.alert(err))
    }
}

export const updateUser = (userId, name) => {
    return (dispatch)=> {
        return axios({
            method: "put",
            url: `${process.env.REACT_APP_API_URL}api/users/${userId}`,
            data: {name}
        })
            .then(()=> {
                dispatch({type: UPDATE_USER, payload: name})
            })
            .catch((err)=> window.alert(err))
    }
}

export const updatePassword = (userId, password) => {
    return (dispatch)=> {
        return axios({
            method: "put",
            url: `${process.env.REACT_APP_API_URL}api/users/${userId}`,
            data: {password}
        })
            .then(()=> {
                dispatch({type: UPDATE_PASSWORD, payload: password})
            })
            .catch((err)=> window.alert(err))
    }
}

export const deleteUser = (userId, name, email, password) => {
    return (dispatch) => {
        return axios({
            method:"delete",
            url: `${process.env.REACT_APP_API_URL}api/users/${userId}`,
            data: {name,email,password}
        })
        .then(()=> {
            dispatch({ type: DELETE_USER, payload: {userId}})
        })
    }
}