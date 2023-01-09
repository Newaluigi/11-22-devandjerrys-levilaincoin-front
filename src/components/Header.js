import img1 from '../assets/img/nuclear-bomb.svg'
import Search from './Search'
import VilainButton from './VilainButton'
import BurgerMenu from './BurgerMenu'

const Header = () => {
  return (
    <div className='headerElements'>
      <div className='containButtonHeader'>
        <VilainButton />
      </div>
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
      <div className='searchModuleHeader'>
        <Search />
      </div>
      <div className='menuBurgerHeader'>
        <BurgerMenu />
      </div>
    </div>
  )
}

export default Header
