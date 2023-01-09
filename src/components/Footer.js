import Search from './Search'
// import Resp from './Resp'
import { useState } from 'react'

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openPopup = () => setIsOpen(true)
  const closePopup = () => setIsOpen(false)

  return (
    <div className='lvcFooter'>
      <img
        className='logoAppliMobil'
        src={require('../assets/img/appliMobil.png')}
        alt='Télécharger application mobile'
      />
      <div className='footerButton'>
        <button className='boutonFooter'>Notre équipe</button>
        <button className='boutonFooter' onClick={openPopup}>
          Irresponsabilité
        </button>
      </div>
      <div
        className='popUp'
        style={{
          display: isOpen ? 'block' : 'none',
          position: 'fixed',
          top: '20%',
          left: '30%',
          width: '30%',
          backgroundColor: 'white',
          padding: '10px 30px 10px 30px',
          color: 'black'
        }}
      >
        <h3 className='dechargeText1'>Clause d&#39;irresponsabilité</h3>
        <h5 className='dechargeText2'>
          Compte-tenu de la gravité des évèments qui pourraient se produire,
          nous vous demandons de souscrire une assurance en béton. Dans le cas
          contraire, notre entreprise n&#39;assumera pas la responsabilité des
          dommages ou des pertes causées.
        </h5>
        <button className='boutonFooter' onClick={closePopup}>
          Fermer
        </button>
      </div>
      <div className='moduleSearch'>
        {/* <MenuBurger /> */}
        {/* <BoutonPrestataire /> */}
        <Search />
      </div>
    </div>
  )
}

export default Footer
