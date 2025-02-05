import React from 'react'
import "./Signupscreen.css"
const Signupscreen = () => {
  const register=(e)=>{
    e.preventDefault();
  }
  const signIn=(e)=>{
    e.preventDefault();

  }
  return (
    <div className="signupscreen">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password'/>
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
