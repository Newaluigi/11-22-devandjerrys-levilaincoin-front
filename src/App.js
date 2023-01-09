import Home from './screens/Home'
import Footer from './components/Footer'
import Header from './components/Header'
// import VilainButton from './components/VilainButton'
import { Routes, Route } from 'react-router-dom'
import Birthday from './screens/Birthday'
import Conquer from './screens/Conquer'
import Destroy from './screens/Destroy'
import Escort from './screens/Escort'
import Nanny from './screens/Nanny'
import Stag from './screens/Stag'
import Header from './components/Header'

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/birthday' element={<Birthday />} />
        <Route path='/conquer' element={<Conquer />} />
        <Route path='/destroy' element={<Destroy />} />
        <Route path='/escort' element={<Escort />} />
        <Route path='/nanny' element={<Nanny />} />
        <Route path='/stag' element={<Stag />} />
      </Routes>
      {/* <VilainButton /> */}
      <Footer />
    </div>
  )
}
export default App
