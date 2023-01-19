import { Link } from 'react-router-dom'
// import React, { useState, useEffect } from "react";
// import axios from "axios";
import img1 from '../assets/img/nuclear-bomb.svg'
import VilainButton from './VilainButton'
import BurgerMenu from './BurgerMenu'
import Search from './Search'
import SearchList from './SearchList';

const Header = () => {

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


  return (
    <div className='headerElements'>
      <div className='containButtonHeader'>
        <VilainButton />
      </div>
      <Link to='/' className='logoFromHeader'>
        <img src={img1} alt='image_du_site' className='image1' />
      </Link>
      <Link to='/' className='logoFromHeader2'>
        <img
          src={require('../assets/img/leVilainCoinLogo.png')}
          alt='logo_du_site'
          className='image2'
        />
      </Link>
      <div className='searchModuleHeader'>
        {/* <Search search={search} setSearch={setSearch} /> */}
        {/* <SearchList search={search} vilainsDisplayed={vilainsDisplayed} />*/}
        <Search/>
 
      </div>
      <div className='menuBurgerHeader'>
        <BurgerMenu />
      </div>
    </div>
  )
}

export default Header
