import ReactDOM from 'react-dom'
import logo from '../assets/img/leVilainCoinLogo.png'
import { SlClose } from 'react-icons/sl'

const ModalResponsability = ({ open, children, onClose }) => {
  // Conditionne l'affichage du Modal
  if (!open) return null
  return ReactDOM.createPortal(
    <>
      <div className='overlayModal'></div>
      <div className='modalStyle'>
        {children}
        <div className='form'>
          <div className='boxLogo'>
            <img src={logo} alt='logo' className='logo' />
          </div>
          <h3 className='responsabilityTitle'>Clause d&#39;irresponsabilité</h3>
          <p className='responsabilityText'>
            Compte-tenu de la gravité des évèments qui ne manqueront pas de se
            produire, nous vous demandons de souscrire une assurance en béton.
          </p>
          <p className='responsabilityText'>
            Dans le cas contraire, notre entreprise n&#39;assumera pas la
            responsabilité des dommages et pertes causés.
          </p>
          {/*pas de paramètre à cette fonction. Elle sera exécuté sur onClick mais elle ne cible rien dans le HTML*/}
          <button className='crossModaleButtonResp' onClick={onClose}>
            <SlClose />
          </button>
        </div>
      </div>
    </>,
    //VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
    document.getElementById('portal')
    //VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
  )
}

export default ModalResponsability
