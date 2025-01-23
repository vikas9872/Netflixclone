import React from 'react'
import "./Homescreen.css"
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import requests from '../Requests/Requests'
import Row from '../Row/Row'

const Homescreen = () => {
  return (
    <div>
        {/* navbar */}
        <Navbar/>
        {/* banner */}
        <Banner/>
        {/* row */}
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isaLargeRow
        />
        <Row
          title="Trending Now"
          fetchUrl={requests.fetchTrending}
          isaLargeRow
        />
        <Row
          title="Top Rated"
          fetchUrl={requests.fetchTopRated}
          isaLargeRow
        />
        <Row
          title="Action Movies"
          fetchUrl={requests.fetchActionMovies}
          isaLargeRow
        />
        <Row
          title="Comedy Movies"
          fetchUrl={requests.fetchComedyMovies}
          isaLargeRow
        />
        <Row
          title="Horror Movies"
          fetchUrl={requests.fetchHorrorMovies}
          isaLargeRow
        />
        <Row
          title="Romance Movies"
          fetchUrl={requests.fetchRomanceMovies}
          isaLargeRow
        />
        <Row
          title="Documentaries"
          fetchUrl={requests.fetchDocumentaries}
          isaLargeRow
        />
    </div>
  )
}

export default Homescreen
