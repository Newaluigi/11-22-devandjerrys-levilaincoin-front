import son1 from '../assets/audio/joker1.mp3'
// import { useNavigate } from 'react-router-dom'

const VilainButton = () => {
  //   const navigate = useNavigate()
  let audio1 = new Audio(son1)

  const start = () => {
    audio1.play()
    // navigate('/Home.js')
  }

  return (
    <>
      <div className='mainButton'>
        <button onClick={start} type='button'>
          <img
            src={require('../assets/img/icone1.jpg')}
            alt='icone +'
            className='iconePlus'
          />{' '}
          Devenir vilain
        </button>
      </div>
    </>
  )
}

export default VilainButton
