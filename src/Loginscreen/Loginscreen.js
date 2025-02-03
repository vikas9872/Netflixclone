import React from 'react'
import './Loginscreen.css'
const Loginscreen = () => {
  return (
    <div className="loginscreen">
      <div className="login_background">
        <img src="./Images/netflixlogo.png" alt="login_background" className='loginscreen_logo' />
        <button className='loginscreen_button'>
          Sign In
        </button>
        <div className="loginscreen_gradient" />
      </div>
      <div className="loginscreen_body">
        <>
          <h1>Unlimited films, TV programmes and more.</h1>
          <h2>Watch anywhere, Cancel at anytime</h2>
          <h3>Ready to watch? Enter your email to create to restart your membership</h3>
          <div className="loginscreen_input">
            <form>
              <input type="email" placeholder='Email Address'/>
              <button className='loginscreen_getstarted'>GET STARTED</button>
            </form>
          </div>
        </>
      </div>
    </div>
  )
}

export default Loginscreen
