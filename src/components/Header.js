import img1 from '../assets/img/nuclear-bomb.svg'
import Search from './Search'
import MenuButton from '../components/MenuButton'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header-images'>
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
      <Search />
      <MenuButton />
    </div>
  )
}

export default Header
