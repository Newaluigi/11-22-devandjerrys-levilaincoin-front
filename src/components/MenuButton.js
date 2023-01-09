import { Link } from 'react-router-dom'

const MenuButton = () => {
  let sidenav = document.getElementById('mySidenav')

  /* Set the width of the side navigation to 250px */
  const openNav = () => {
    sidenav.classList.add('active')
  }

  /* Set the width of the side navigation to 0 */
  const closeNav = () => {
    sidenav.classList.remove('active')
  }

  return (
    <div className='grosSandwich'>
      <nav>
        <div id='mySidenav' className='sidenav'>
          <div id='closeBtn' className='close' onClick={() => closeNav()}>
            x
          </div>
          <ul>
            <li>Connexion</li>
            <li>Inscription</li>
            <li>Devenir prestataire</li>
            <li>Home Page</li>
          </ul>
        </div>

        <div id='openBtn' onClick={() => openNav()}>
          <span className='burger-icon'>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
      </nav>
    </div>
  )
}

export default MenuButton
