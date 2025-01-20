import React from 'react'
import "./Banner.css"
const Banner = () => {
    function truncate(string, n){
        return string?.length > n ? string.substr(0, n-1)+"..." : string
    }
    return (
        <header className="banner"
            style={{
                backgroundImage: `url('./Images/netflixbanner.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center center"
            }}>
            <div className="banner_content">
                <h1 className='banner_title'>
                    Movie Name
                </h1>
                <div className="banner_buttons">
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My List</button>
                </div>
                <h1 className="banner_description">
                    {truncate(`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum autem, veritatis architecto dolorum libero rerum iusto aut doloribus ut accusamus.`,150)}
                </h1>
            </div>
            <div className="banner_fadeBottom" />
        </header>
    )
}

export default Banner
