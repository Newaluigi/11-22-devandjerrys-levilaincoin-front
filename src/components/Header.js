import img1 from '../assets/img/nuclear-bomb.svg'
import Search from './Search'
import VilainButton from './VilainButton'
import BurgerMenu from './BurgerMenu'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='headerElements'>
      <div className='containButtonHeader'>
        <VilainButton />
      </div>
      <Link to='/'>
        <img src={img1} alt='image_du_site' className='image1' />
      </Link>
      <Link to='/'>
        <img
          src={require('../assets/img/leVilainCoinLogo.png')}
          alt='logo_du_site'
          className='image2'
        />
      </Link>
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
