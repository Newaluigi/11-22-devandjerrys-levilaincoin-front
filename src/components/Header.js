import { Link } from 'react-router-dom'

import img1 from '../assets/img/nuclear-bomb.svg'
import VilainButton from './VilainButton'
import BurgerMenu from './BurgerMenu'
import Search from './Search'
import SearchList from './SearchList'

const Header = () => {
  return (
    <div className='headerElements'>
      <div className='containButtonHeader'>
        <VilainButton />
      </div>
      {/* <Link to='/' className='logoFromHeader'>
        <img src={img1} alt='image_du_site' className='image1' />
      </Link> */}
      <Link to='/' className='logoFromHeader2'>
        <img
          src={require('../assets/img/leVilainCoinLogo.png')}
          alt='logo_du_site'
          className='image2'
        />
      </Link>
      {/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */}
      <div className='searchBurger'>
        {/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */}
        <div className='searchModuleHeader'>
          <Search />
        </div>
        <div className='menuBurgerHeader'>
          <BurgerMenu />
        </div>
      </div>
    </div>
  )
}

export default Header

// // XXXXXXXXXXXXXXX initial state, full list XXXXXXXXXXXXXXXXX
// const [vilains, setVilains] = useState([])
// // UseEffect
// useEffect(() => {
//   axios.get('http://localhost:4242/').then(response => {
//     console.log(response.data);
//     setVilains(response.data)
//     console.log(vilains);
//   })
// }, [])
// // XXXXXXXXXXXXXXXX state of the vilain List display  XXXXXXXXXXXXXXXXXXXXXXXXXX
// const [search, setSearch] = useState("");
// const vilainsDisplayed = vilains;
