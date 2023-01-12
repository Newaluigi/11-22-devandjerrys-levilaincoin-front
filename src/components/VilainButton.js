import son1 from '../assets/audio/joker1.mp3'
import { Link } from 'react-router-dom'
// import { redirect, useNavigate } from 'react-router-dom'

const VilainButton = () => {
  // const navigate = useNavigate()
  let audio1 = new Audio(son1)

  const start = () => {
    audio1.play()
    // navigate('/NewVilain.js')
  }

  return (
    <>
      <div className='containBtn'>
        <Link to='/NewVillain' style={{ textDecoration: 'none' }}>
          <button onClick={start} type='button' className='mainBtn'>
            <img
              src={require('../assets/img/icone1.jpg')}
              alt='icone +'
              className='iconePlus'
            />
            <p className='textBtn'>Devenir vilain</p>
          </button>
        </Link>
      </div>
    </>
  )
}

export default VilainButton
