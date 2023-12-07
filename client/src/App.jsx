import { useState } from 'react'
import axios from "axios"
import './App.css'
import { Header } from './components/Header'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Home } from './pages/home'
import { Connexion } from "./pages/connexion"
import { Inscription } from "./pages/inscription"
import { Searcher } from "./components/Searcher"
import { useEffect } from 'react'

function App() {
  const [uid, setUid] = useState(null)
  const dispatch = useDispatch()

  useEffect(()=> {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/jwtid`,
        withCredentials: true
      })
      .then((res)=> {
        console.log(res)
        setUid(res.data)
      })
      .catch(()=> console.log("Pas de tokens"))
    }
    fetchToken()

    if (uid) dispatch(getUser(uid))
  }, [uid])
  
    

  return (
    <>
      <div>
        <Header/>
        <Searcher/>
        <Routes>
          <Route exact path={"/"} element={<Home/>}/>
          <Route exact path={"/connexion"} element={<Connexion/>}/>
          <Route exact path={"/inscription"} element={<Inscription/>}/>
        </Routes>
      </div>
      
    </>
  )
}

export default App
