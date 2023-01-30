import BurgerMenu from './BurgerMenu'
import ResponsabilityButton from './ResponsabilityButton'
import Search from './Search'
import TeamButton from './TeamButton'
import VilainButton from './VilainButton'

const Footer = () => {
  return (
    <div className='lvcFooter'>
      <div className='logoStore'>
        <img
          className='logoStore1'
          src={require('../assets/img/appstorebis.png')}
          alt='Télécharger application mobile sur Apple Store'
        />
        <img
          className='logoStore2'
          src={require('../assets/img/googleplaybis.png')}
          alt='Télécharger application mobile sur Google Play'
        />
      </div>
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
