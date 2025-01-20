import React from 'react'
import "./Homescreen.css"
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'

const Homescreen = () => {
  return (
    <div>
        {/* navbar */}
        <Navbar/>
        {/* banner */}
        <Banner/>
        {/* row */}
    </div>
  )
}

export default Homescreen
