import { useState } from 'react'
import son1 from '../assets/audio/joker1.mp3'
import ModalDevenirVilain from './ModalDevenirVilain'
// import { Link } from 'react-router-dom'
// import { redirect, useNavigate } from 'react-router-dom'

const VilainButton = () => {
  // const navigate = useNavigate()
  let audio1 = new Audio(son1)

  const start = () => {
    audio1.play()
    // navigate('/NewVilain.js')
  }
  const [isOpen, setIsOpen] = useState(false)
  const [devVilainIsOpen, setDevVilainIsOpen] = useState(false)
  return (
    <>
      <div className='containBtn'>
        {/* <Link to='/newvilain' style={{ textDecoration: 'none' }}> */}
        <div style={{ display: isOpen ? 'block' : 'none' }}></div>
        <button
          onClick={start}
          onClick={() => {
            setDevVilainIsOpen(true)
            setIsOpen(false)
          }}
          type='button'
          className='mainBtn'
        >
          <img
            src={require('../assets/img/icone1.jpg')}
            alt='icone +'
            className='iconePlus'
          />
          <p className='textBtn'>Devenir vilain</p>
        </button>
        <ModalDevenirVilain
          open={devVilainIsOpen}
          onClose={() => setDevVilainIsOpen(false)}
        ></ModalDevenirVilain>
        {/* </Link> */}
      </div>
    </>
  )
}

// return (
//   <>
//     <div className='containBtn'>
//       <Link to='/newvilain' style={{ textDecoration: 'none' }}>
//         <button onClick={start} type='button' className='mainBtn'>
//           <img
//             src={require('../assets/img/icone1.jpg')}
//             alt='icone +'
//             className='iconePlus'
//           />
//           <p className='textBtn'>Devenir vilain</p>
//         </button>
//       </Link>
//     </div>
//   </>
// )

export default VilainButton
