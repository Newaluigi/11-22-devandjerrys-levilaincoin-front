import image1 from '../assets/img/nuclear-bomb.svg'
import image2 from '../assets/img/leVilainCoinLogo.png'


const Header = () => {
  return (
    <div className='header-images'>
      <img
        src={image1}
        alt='image_du_site'
        className='image1'
        onClick={'./screens/Home'}
      />
      <img
        src={image2}
        alt='logo_du_site'
        className='image2'
        onClick={'./screens/Home'}
      />
    </div>
  )
}

export default Header
