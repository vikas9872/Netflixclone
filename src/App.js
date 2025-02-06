import React, { useEffect } from 'react';
import './App.css';
import Homescreen from './Homescreen/Homescreen';
import Loginscreen from './Loginscreen/Loginscreen';
import { Routes, Route } from "react-router-dom";
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/counter/userSlice';
import { login } from './features/counter/userSlice';
function App() {
  const user=useSelector(selectUser);
  const dispatch=useDispatch()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        dispatch(logout)
      }
    });

    return () => unsubscribe();
  }, [dispatch]);
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
