import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FanCard } from '../components/FanCard'
import { useState, useEffect } from 'react'
import { getFan } from '../redux/actions/fan.actions'
import { isEmpty } from '../utils'


export const Home = () => {
  const [loadCard, setLoadCard] = useState(false)
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()
  const fans = useSelector((state)=> state.fanReducer)

  const loadMore = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >
      document.scrollingElement.scrollHeight
    ) {
      setLoadCard(true)
    }
  }

  useEffect(()=> {
    if (loadCard) {
      dispatch(getFan(count))
      setLoadCard(false)
      setCount(count + 10)
    }
    window.addEventListener("scroll",loadMore)
  }, [loadCard, dispatch, count])

  return (
    <div>
      <div>
        <ul>
          {isEmpty((fans[0])) &&
          fans.map((fan)=> {
            return <FanCard fanProps={fan} key={fan._id}/>
          })}
        </ul>
      </div>
    </div>
  )
}
