import img1 from '../assets/img/nuclear-bomb.svg'
import Search from './Search'
import MenuButton from '../components/MenuButton'

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
      <Search />
      <MenuButton />
    </div>
  )
}

export default Header
