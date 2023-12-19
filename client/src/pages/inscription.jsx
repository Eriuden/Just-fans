import React, {useState} from 'react'
import axios from 'axios'
import { Connexion } from './connexion'

export const Inscription = () => {
  const [formSubmit, setFormSubmit] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConf, setPasswordConf] = useState("")

  const handleRegister = async(e)=> {
    e.preventDefault()

    const terms = document.getElementById("terms")
    const nameError = document.querySelector(".name.error")
    const emailError = document.querySelector(".email.error")
    const passwordError = document.querySelector(".password.error")
    const passwordConfError = document.querySelector(".password-conf.error")
    const termsError = document.querySelector(".terms.error")
    passwordConfError.innerHTML=""
    termsError.innerHTML=""

    if (password !== passwordConfError || password.length <8 || !terms.checked) {
      if (password !== passwordConfError) {
        passwordConfError.innerHTML="Les mots de passe ne correspondent pas"
      }

      if (password.length < 8) {
        passwordError.innerHTML="Mot de passe trop court, minimum huit caractères"
      }

      if (!terms.isChecked) {
        termsError.innerHTML="Veuillez accepter les conditions d'utilisations"
      }
    } else {
      await axios({
        method:"post",
        url: `${process.env.REACT_APP_API_URL}api/users/register`,
        data: {
          name,
          email,
          password
        }
      })
      .then((res)=> {
        if (res.data.errors) {
          nameError.innerHTML = res.data.errors.name 
          emailError.innerHTML = res.data.errors.email 
          passwordError.innerHTML = res.data.errors.password
        } else {
          setFormSubmit(true)
        }
      })
      .catch((err)=> window.alert(err))
    }
  }
  return (
    <div>
      <>
        {formSubmit ? (
          <>
            <h4>Votre inscription s'est bien déroulée, vous pouvez vous connecter</h4>
            <Connexion/>
          </>
        ): (
          <form action='' className ="bg-slate-50 flex flex-col border-2 border-l-4 
          rounded-md border-black mx-12 my-4 md:mx-[20%] lg:mx-[20%]" onSubmit={handleRegister}>
            <label htmlFor='name' className='my-2'>Votre nom</label>
              <input className='border-2 border-black mx-12 md:mx-[30%] lg:mx-[30%]'
              type="text" name='name' id='name' value={name} onChange={(e)=> setName(e.target.value)}/>

            <label htmlFor='email' className='my-2'>Votre adresse mail</label>
              <input className='border-2 border-black mx-12  md:mx-[30%]
              lg:mx-[30%]' type="text" name='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            
            <label htmlFor='password' className='my-2'>Votre mot de passe</label>
              <input className='border-2 border-black mx-12  md:mx-[30%]
              lg:mx-[30%]' type="password" name='password' id='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
            
            <label htmlFor='password-conf' className='my-2'>Confirmer votre mot de passe</label>
              <input className="border-2 border-black mx-12  md:mx-[30%]
              lg:mx-[30%] " type="password" name='password-conf' id='password-conf'
              value={passwordConf} onChange={(e)=>setPasswordConf(e.target.value)}/>
            
            <label className='mx-8 my-2 md:mx-12' htmlFor='terms'>J'accepte les termes et conditions</label>
              <input type="checkbox" id='terms' />
              <div className='terms error'></div>

              <input type="submit" className='border-2 border-black my-2 mx-[25%]
              xs:mx-[40%] sm:mx-[42%] md:mx-[40%] lg:mx-[43%] xl:mx-[43%] 2xl:mx-[43%]'
              value="inscriptions"/>
          </form>
        )}
      </>
    </div>
  )
}
