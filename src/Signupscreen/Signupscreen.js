import React, { useRef } from 'react'
import "./Signupscreen.css"
import { auth } from "../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"

const Signupscreen = () => {
  const emailRef = useRef(null)
  const passRef = useRef(null)

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passRef.current.value,
    ).then((authUser) => {
      console.log(authUser)
    }).catch((error) => {
      alert(error.message)
    });
  }

  const signIn = (e) => {
    e.preventDefault();
  }

  return (
    <div className="signupscreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder='Email' />
        <input ref={passRef} type="password" placeholder='Password' />
        <button type='submit' onClick={signIn}>Sign In</button>
        <h4>
          <span className='signupscreen_gray'>New to netflix?</span>
          <span className='signupscreen_link' onClick={register}>Sign up now.</span>
        </h4>
      </form>
    </div>
  )
}

export default Signupscreen