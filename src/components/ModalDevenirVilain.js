import ReactDOM from 'react-dom'
import logo from '../assets/img/leVilainCoinLogo.png'
import { SlClose } from 'react-icons/sl'

const ModalDevenirVilain = ({ open, children, onClose }) => {
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
          <h1>Je veux devenir prestataire</h1>
          <input placeholder='Firstname' />
          <input placeholder='Lastname' />
          <input placeholder='Email' />
          <input placeholder='Occupation' />
          <input placeholder='Achievements' />

          {/*pas de paramètre à cette fonction. Elle sera exécuté sur onClick mais elle ne cible rien dans le HTML*/}
          <button className='crossModaleDevenirVilain' onClick={onClose}>
            <SlClose />
          </button>
        </div>

        <button className='modaleButton'>SE CONNECTER</button>
      </div>
    </>,
    //VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
    document.getElementById('portal')
    //VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
  )
}

export default ModalDevenirVilain
