import React, { useEffect } from 'react';
import './App.css';
import Homescreen from './Homescreen/Homescreen';
import Loginscreen from './Loginscreen/Loginscreen';
import { Routes, Route, useNavigate } from "react-router-dom";
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/counter/userSlice';
import { login } from './features/counter/userSlice';
import Profilescreen from './Profilescreen/Profilescreen';
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()
  const navigate=useNavigate()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        dispatch(logout())
        navigate('/');
      }
    });
    return () => unsubscribe();
  }, [dispatch,navigate]);
  return (
    <div className="App">
      <Routes>
        {
          !user
            ? (<Route path="/" element={<Loginscreen />} />)
            :
            (
              <>
                <Route path="/" element={<Homescreen />} />
                <Route path='/profile' element={<Profilescreen />} />
              </>
            )
        }
      </Routes>
    </div>
  );
}

export default App;
