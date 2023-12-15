import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteFan } from '../redux/actions/fan.actions'

export const DeleteButton = ({deleteProps}) => {
    const dispatch = useDispatch()
    const destroyFan = () => dispatch(deleteFan(deleteProps._id))

  return (
    <div onClick={()=> {
        if (window.confirm("Il est pas frais mon ventilo ?")){
            destroyFan()
        }
    }}>DeleteButton</div>
  )
}
