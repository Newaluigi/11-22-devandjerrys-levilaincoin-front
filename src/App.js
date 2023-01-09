import { Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import Footer from './components/Footer'
import NewVilain from './screens/NewVilain'

function App() {
  return (
    <div className='App'>
      <Home />
      {/* <VilainButton /> */}
      <Footer />
      <Routes>
        <Route path='/newvilain' element={<NewVilain />} />
      </Routes>
    </div>
  )
}
export default App
