import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import ModalSigningIn from './ModalSigningIn'
import ClickAwayListener from '@mui/base/ClickAwayListener'

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  // XXXXXXXXXXXXXXXXXXXXXX STATE modal signing in XXXXXXXXXXXXXXXXXXXX
  const [registrationIsOpen, setRegistrationIsOpen] = useState(false)

  const handleClickAway = () => {
    setIsOpen(false)
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
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
                  <li onClick={() => setIsOpen(false)}>Connexion</li>
                </Link>
                {/* XXXXXXXXXXXXXXXXX lien clicKable modal XXXXXXXXXXXXXXXXXXXXXX */}
                <div>
                  <li
                    style={{ font: 'var(--font2)' }}
                    onClick={() => {
                      setRegistrationIsOpen(true)
                      setIsOpen(false)
                    }}
                  >
                    Inscription
                  </li>
                  <ModalSigningIn
                    open={registrationIsOpen}
                    onClose={() => setRegistrationIsOpen(false)}
                  ></ModalSigningIn>
                </div>
                <Link to='/notreequipe'>
                  <li onClick={() => setIsOpen(false)}>Notre équipe</li>
                </Link>
                <Link to='/#popup'>
                  <li onClick={() => setIsOpen(false)}>iResponsabilité</li>
                </Link>
                <Link to='/'>
                  <li onClick={() => setIsOpen(false)}>Home</li>
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
