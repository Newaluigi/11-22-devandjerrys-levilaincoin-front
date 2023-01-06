import img1 from '../assets/img/nuclear-bomb.svg'

const Header = () => {
  return (
    <div className='header-images'>
      <img
        src={img1}
        alt='image_du_site'
        className='image1'
        onClick={'./screens/Home'}
      />
      <img
        src={require('../assets/img/leVilainCoinLogo.png')}
        alt='logo_du_site'
        className='image2'
        onClick={'./screens/Home'}
      />
    </div>
  )
}

export default Header
