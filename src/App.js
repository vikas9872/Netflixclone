import React from 'react';
import './App.css';
import Homescreen from './Homescreen/Homescreen';
import Loginscreen from './Loginscreen/Loginscreen';
import { Routes, Route } from "react-router-dom";
function App() {
  const user=null;
  return (
    <div className="App">
      <Routes>
        {
          !user 
          ? (<Route path="/" element={<Loginscreen />} />) 
          : (<Route path="/" element={<Homescreen />} />)
        }
      </Routes>
    </div>
  );
}

export default App;
