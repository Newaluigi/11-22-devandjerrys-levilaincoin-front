import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import ModalSigningIn from './ModalSigningIn'

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  // XXXXXXXXXXXXXXXXXXXXXX STATE modal signing in XXXXXXXXXXXXXXXXXXXX
  const [registrationIsOpen, setRegistrationIsOpen] = useState(false);

  return (
    <div className='menuBurger'>
      <button className='menuButton' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'X' : <GiHamburgerMenu />}
      </button>
      <nav>
        <div className='menuListDiv'>
          <ul
            className='menuList'
            style={{ display: isOpen ? 'block' : 'none' }}
          >
            <div className='menuListLi'>
              <Link to='/connexion'>
                <li>Connexion</li>
              </Link>
              {/* XXXXXXXXXXXXXXXXX lien clicKable modal XXXXXXXXXXXXXXXXXXXXXX */}
              <div>
              <li onClick={() => setRegistrationIsOpen(true)}>Inscription</li>
              <ModalSigningIn open={registrationIsOpen} onClose={() => setRegistrationIsOpen(false)}>
                <h1>Inscription</h1>
              </ModalSigningIn>
            </div>
            <Link to='/notreequipe'>
              <li>Notre équipe</li>
            </Link>
            <Link to='/#popup'>
              <li>iResponsabilité</li>
            </Link>
            <Link to='/'>
              <li>Home</li>
            </Link>
        </div>
      </ul>
    </div>
      </nav >
    </div >
  )
}

export default BurgerMenu

//   ---------------- Ancien code du burger -----
//   const MenuButton = () => {
//   let sidenav = document.getElementById('mySidenav')

//   /* Set the width of the side navigation to 250px */
//   const openNav = () => {
//     sidenav.classList.add('active')
//   }

//   /* Set the width of the side navigation to 0 */
//   const closeNav = () => {
//     sidenav.classList.remove('active')
//   }

//   return (
//     <div className='grosSandwich'>
//       <nav>
//         <div id='mySidenav' className='sidenav'>
//           <div id='closeBtn' className='close' onClick={() => closeNav()}>
//             x
//           </div>
//           <ul>
//             <li>Connexion</li>
//             <li>Inscription</li>
//             <li>Devenir prestataire</li>
//             <li>Home Page</li>
//           </ul>
//         </div>

//         <div id='openBtn' onClick={() => openNav()}>
//           <span className='burger-icon'>
//             <span></span>
//             <span></span>
//             <span></span>
//           </span>
//         </div>
//       </nav>
//     </div>
//   )
// }
