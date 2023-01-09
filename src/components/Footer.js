import BurgerMenu from './BurgerMenu'
import './Footer.scss'

import ResponsabilityButton from './ResponsabilityButton'
import Search from './Search'
import TeamButton from './TeamButton'
import VilainButton from './VilainButton'

const Footer = () => {
  return (
    <div className='lvcFooter'>
      <img
        className='logoAppliMobil'
        src={require('../assets/img/appliMobil.png')}
        alt='Télécharger application mobile'
      />
      <div className='footerButton'>
        <TeamButton />
        <ResponsabilityButton />
      </div>

      <div className='menuBurgerFooter'>
        <BurgerMenu />
      </div>
      <div className='containButtonFooter'>
        <VilainButton />
      </div>
      <div className='searchModuleFooter'>
        <Search />
      </div>
    </div>
  )
}

export default Footer
