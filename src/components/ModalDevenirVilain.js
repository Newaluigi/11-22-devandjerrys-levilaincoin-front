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
          <input placeholder='Prénom' />
          <input placeholder='Nom' />
          <input placeholder='Email' />
          <input placeholder='Votre prix' />
          {/* <input type='select' multiple='non' placeholder='Type de prestation' /> */}
          <select>
            <option placeholder=''>--Type de prestation--</option>
            <option value='Conquer'>Conquérir le monde</option>
            <option value='Escort'>Escort Vilain</option>
            <option value='Birthday'>Fête d'anniversaire</option>
            <option value='Nanny'>Bad nounou</option>
            <option value='Stag'>EVG et EVJF</option>
            <option value='Destroy'>Dégradation</option>
          </select>
          <textarea placeholder='Votre fierté' />

          {/*pas de paramètre à cette fonction. Elle sera exécuté sur onClick mais elle ne cible rien dans le HTML*/}
          <button className='crossModaleDevenirVilain' onClick={onClose}>
            <SlClose />
          </button>
        </div>

        <button className='modaleButton'>SOUMETTRE</button>
      </div>
    </>,
    //VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
    document.getElementById('portal')
    //VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
  )
}

export default ModalDevenirVilain
