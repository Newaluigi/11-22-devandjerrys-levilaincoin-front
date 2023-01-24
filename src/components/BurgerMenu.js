import { useState } from 'react'
import { Link } from 'react-router-dom'

import ClickAwayListener from '@mui/base/ClickAwayListener'
import ModalSigningIn from './ModalSigningIn'
import ModalConnexion from './ModalConnexion'
import ModalResponsability from './ModalResponsability'

import { GiHamburgerMenu } from 'react-icons/gi'
import { BsPersonCircle } from 'react-icons/bs'
import { BiLogInCircle } from 'react-icons/bi'
// logo LogOut non utilisé mais dispo si besoin
import { BiLogOutCircle } from 'react-icons/bi'
import { RiTeamLine } from 'react-icons/ri'
import { MdOutlineLibraryBooks } from 'react-icons/md'
import { AiOutlineHome } from 'react-icons/ai'
import { SlClose } from 'react-icons/sl'

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  // XXXXXXXXXXXXXXXXXXXXXX STATE modal signing in XXXXXXXXXXXXXXXXXXXX
  const [registrationIsOpen, setRegistrationIsOpen] = useState(false)
  // XXXXXXXXXXXXXXXXXXXXXX STATE modal connexion XXXXXXXXXXXXXXXXXXXX
  const [connexionIsOpen, setConnexionsetIsOpen] = useState(false)
  // XXXXXXXXXXXXXXXXXXXXXX STATE modal connexion XXXXXXXXXXXXXXXXXXXX
  const [responsabilityIsOpen, setResponsabilityIsOpen] = useState(false)

  const handleClickAway = () => {
    setIsOpen(false)
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className='menuBurger'>
        <button className='menuButton' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <SlClose style={{ color: '#FFF' }} /> : <GiHamburgerMenu />}
        </button>
        <nav>
          <div className='menuListDiv'>
            <ul
              className='menuList'
              style={{ display: isOpen ? 'block' : 'none' }}
            >
              <div className='menuListLi'>
                {/* Modale de connexion ci-dessous */}
                <div>
                  <li
                    onClick={() => {
                      setConnexionsetIsOpen(true)
                      setIsOpen(false)
                    }}
                  >
                    <BsPersonCircle className='iconeMenu' />
                    Connexion
                  </li>
                  <ModalConnexion
                    open={connexionIsOpen}
                    onClose={() => setConnexionsetIsOpen(false)}
                  ></ModalConnexion>
                </div>
                {/* Modale d'inscription ci-dessous */}
                <div>
                  <li
                    onClick={() => {
                      setRegistrationIsOpen(true)
                      setIsOpen(false)
                    }}
                  >
                    <BiLogInCircle className='iconeMenu' />
                    Inscription
                  </li>
                  <ModalSigningIn
                    open={registrationIsOpen}
                    onClose={() => setRegistrationIsOpen(false)}
                  ></ModalSigningIn>
                </div>
                <Link to='/notreequipe'>
                  <li onClick={() => setIsOpen(false)}>
                    <RiTeamLine className='iconeMenu' />
                    Notre équipe
                  </li>
                </Link>
                {/* Modale responsabilité ci-dessous */}
                <div>
                  <li
                    onClick={() => {
                      setResponsabilityIsOpen(true)
                      setIsOpen(false)
                    }}
                  >
                    <MdOutlineLibraryBooks className='iconeMenu' />
                    iResponsabilité
                  </li>
                  <ModalResponsability
                    open={responsabilityIsOpen}
                    onClose={() => setResponsabilityIsOpen(false)}
                  ></ModalResponsability>
                </div>

                <Link to='/'>
                  <li onClick={() => setIsOpen(false)}>
                    <AiOutlineHome className='iconeMenu' />
                    Home
                  </li>
                </Link>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </ClickAwayListener>
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
