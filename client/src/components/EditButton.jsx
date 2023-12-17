import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { updateFan } from '../redux/actions/fan.actions'

export const EditButton = (fanId) => {
  const [name, setName] = useState(false)
  const [pics, setPics] = useState(false)
  const [price, setPrice] = useState(false)
  const [edit, setEdit] = useState(false)
  const dispatch = useDispatch()

  const editFan = (e)=> {
    e.preventDefault()
    if (name || pics || price) {
        dispatch(updateFan(fanId, name, pics, price))
        setName("")
        setPics("")
        setPrice("")
        setEdit(true)
    }
  }

  return (
    <div>
        {edit == "false" && (
            <form action='' onSubmit={editFan}>
                <input
                    type="text"
                    name="name"
                    onChange={(e)=> setName(e.target.value)}
                />

                <input
                    type="file"
                    name="pics"
                    onChange={(e)=> setPics(e.target.value)}
                />

                <input
                    type="text"
                    name="price"
                    onChange={(e)=> setPrice(e.target.value)}
                />

                <input type="submit" value="Valider les modifications"/>
            </form>
        )}
    </div>
  )
}
