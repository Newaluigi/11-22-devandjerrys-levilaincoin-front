import React, { useEffect } from 'react'
import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from './screens/Home'
import Footer from './components/Footer'
import NewVilain from './screens/NewVilain'
import Header from './components/Header'
import Birthday from './screens/Birthday'
import Conquer from './screens/Conquer'
import Destroy from './screens/Destroy'
import Escort from './screens/Escort'
import Nanny from './screens/Nanny'
import Stag from './screens/Stag'
import Profile from './components/Profile'
// XXXXXXXXXXXXXXXXXXXXX   import pour GOOGLE AUTH  XXXXXXXXXXXXXXXXX
import Landing from './screens/Google Auth/Landing'
import Login from './screens/Google Auth/Login'
import Signup from './screens/Google Auth/Signup'
import UserPage from './screens/Google Auth/UserPage'

const App = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    const theUser = localStorage.getItem("user");

    if (theUser && !theUser.includes("undefined")) {
      setUser(JSON.parse(theUser));
    }
  }, []);
  return (
    <div className='App'>
      <div className='headerFromApp'>     
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/newvilain' element={<NewVilain />} />
        <Route path='/birthday' element={<Birthday />} />
        <Route path='/conquer' element={<Conquer />} />
        <Route path='/destroy' element={<Destroy />} />
        <Route path='/escort' element={<Escort />} />
        <Route path='/nanny' element={<Nanny />} />
        <Route path='/stag' element={<Stag />} />
        <Route path='/profile/id/:idVilain' element={<Profile />} />
        <Route path='/profile/name/:nameVilain' element={<Profile />} />
        <Route path='/landing' element={user?.email ? <Navigate to="/UserPage" /> : <Landing />}/>
        <Route path='/sign up' element={user?.email ? <Navigate to="/UserPage" /> : <Signup />}/>
        <Route path='/login' element={user?.email ? <Navigate to="/UserPage" /> : <Login />}/>
        <Route path='/UserPage' element={user?.email ? <UserPage user={user} /> : <Navigate to="/landing" />}/>
      </Routes>
      <div className='footerFromApp'>
        <Footer />
      </div>

    </div>
  )
}
export default App
