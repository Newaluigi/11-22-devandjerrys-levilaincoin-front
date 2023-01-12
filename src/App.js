import { Routes, Route } from 'react-router-dom'
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
import DetailedCardService from './screens/DetailedCardService'

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/newvilain' element={<NewVilain />} />
        <Route path='/birthday' element={<Birthday />} />
        <Route path='/conquer' element={<Conquer />} />
        <Route path='/destroy' element={<Destroy />} />
        <Route path='/escort' element={<Escort />} />
        <Route path='/nanny' element={<Nanny />} />
        <Route path='/stag' element={<Stag />} />
        <Route path='/profile' element={<DetailedCardService />} />
      </Routes>

      <Footer />
    </div>
  )
}
export default App
