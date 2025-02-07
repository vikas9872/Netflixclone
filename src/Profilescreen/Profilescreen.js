import React from 'react'
import "./Profilescreen.css"
import Navbar from '../Navbar/Navbar'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/counter/userSlice'
import { auth } from '../firebase';
const Profilescreen = () => {
    const user=useSelector(selectUser);
    return (
        <div className='profilescreen'>
            <Navbar />
            <div className="profilescreen_body">
                <h1>Edit Profile</h1>
                <div className="profilescreen_info">
                    <img
                        src="./Images/netflixavatar.png"
                        alt="netflix_avatar" />
                    <div className="profilescreen_details">
                        <h2>{user.email}</h2>
                        <div className="profilescreen_plans">
                            <button onClick={()=>{auth.signOut()}} className='profilescreen_signout'>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profilescreen
