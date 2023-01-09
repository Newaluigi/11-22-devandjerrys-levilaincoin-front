import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='menuBurger'>
      <button className='menuButton' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'X' : <GiHamburgerMenu />}
      </button>
      <nav>
        <ul className='menuList' style={{ display: isOpen ? 'block' : 'none' }}>
          <li>Connexion</li>
          <li>Inscription</li>
          <li>Devenir prestataire</li>
          <li>Home</li>
          <li>5e lien</li>
        </ul>
      </nav>
    </div>
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
