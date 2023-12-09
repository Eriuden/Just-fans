import React,{ useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import {getAllFans} from "../redux/actions/fan.actions"
import { useSelector } from "react-redux"
import { FanCard } from "./FanCard"


export const Searcher = () => {
  const [search, setSearch] = useState("")
  const fansData = useSelector((state)=> state.fanReducer)
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(getAllFans)
  }, search)

  const handleSearchChange = (e)=> {
    setSearch(e.target.value)

    const result = fansData.filter((fan)=> fan.name.toLowerCase()
    .includes(search.toLowerCase()))

    setSearch(result)
  }
  return (
    <div>
      <form action="" className="my-4">
        <input type="text" placeholder="Entrez un nom" id="search-input"
        onChange={handleSearchChange} value={search}/>
      </form>

      <div>
        {search ? (
          fansData.map((fan)=> {
            if (fan.name.includes(search)) {
              <FanCard fanProps={fan} key={fan._id}/>
            }
          })
        ): ""}
      </div>
    </div>
  )
}
