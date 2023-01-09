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

      <div className='burgerMenu'>{<BurgerMenu />}</div>
      <div className='vilainBouton'>
        <VilainButton />
      </div>
      <div className='moduleSearch'>
        <Search />
      </div>
    </div>
  )
}

export default Footer
