import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='burgerMenu'>
      <button className='menuButton' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close' : <GiHamburgerMenu />}
      </button>
      <ul className='menuList' style={{ display: isOpen ? 'block' : 'none' }}>
        <li>Menu item 1</li>
        <li>Menu item 2</li>
        <li>Menu item 3</li>
      </ul>
    </div>
  )
}

export default BurgerMenu

// const MenuButton = () => {
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
