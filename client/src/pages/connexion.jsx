import React, {useState} from 'react'
import axios from 'axios'

export const Connexion = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    e.preventDefault()
    const emailError = document.querySelector(".email.error")
    const passwordError = document.querySelector(".password.error")

    axios({
      method:"post",
      url: `${process.env.REACT_APP_API_URL}api/users/login`,
      withCredentials:true,
      data: {
        email,
        password,
      },
    })
    .then((res)=> {
      if (res.data.errors){
        emailError = res.data.errors.email
        passwordError = res.data.errors.password
      } else {
        window.location="/"
      }
    })
    .catch((err)=> {
      window.alert(err)
    })
  }

  return (
    <div>
      <form action='' onSubmit={handleLogin} className="bg-slate-50 border-l-4 
      rounded-md border-2 border-black
      mx-6 my-4 sm:mx-40 md:text-base lg:mx-96 text-base">
      
      <label htmlFor='email'>Email</label>
      <br/>

      <input className='border-2 border black'
      type="text"
      name='email'
      id='email'
      onChange={(e)=> setEmail (e.target.value)}
      value={email}
      />

      <div className='email error'></div>
      <br/>

      <input className='border-2 border black'
      type="password"
      name='pasword'
      id='password'
      onChange={(e)=> setPassword (e.target.value)}
      value={password}
      />

      <div className='password error'></div>
      <br/>

      <input className='border-2 border-black my-2 px-2'
      type="submit"
      value="connexion"
      />

      </form> 
    </div>
  )
}
