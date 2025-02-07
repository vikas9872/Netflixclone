import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import "./Navbar.css"
function Navbar() {
    const [show, handleShow] = useState(false);
    const navigate = useNavigate();
    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        }
        else {
            handleShow(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar)
    }, [])
    return (
        <div className={`navbar ${show && 'navbar_black'}`}>
            <div className="nav_contents">
                <img 
                onClick={()=>navigate("/")}
                className='navbar_logo' 
                src="./Images/netflixlogo.png" 
                alt="neflix_logo" />
                <img 
                onClick={()=>navigate("/profile")}
                className='navbar_avatar' 
                src="./Images/netflixavatar.png" 
                alt="netflix_avatar" />
            </div>
        </div>
    )
}
export default Navbar