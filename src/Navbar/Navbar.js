import React, { useEffect, useState } from 'react'
import "./Navbar.css"
function Navbar() {
    const [show, handleShow]=useState(false);
    const transitionNavbar=()=>{
        if(window.scrollY > 100){
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",transitionNavbar);
        return ()=> window.removeEventListener("scroll",transitionNavbar)
    }, [])
    return (
        <div className={`navbar ${ show && 'navbar_black'}`}>
            <div className="nav_contents">
                <img className='navbar_logo' src="./Images/netflixlogo.png" alt="neflix_logo" />
                <img className='navbar_avatar' src="./Images/netflixavatar.png" alt="netflix_avatar" />
            </div>
        </div>
    )
}
export default Navbar