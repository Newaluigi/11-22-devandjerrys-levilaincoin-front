import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import logo from '../assets/img/leVilainCoinLogo.png'
import { SlClose } from 'react-icons/sl'

const ModalContact = ({ open, children, onClose }) => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()

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
          <input
            placeholder='Nom'
            onChange={e => setName(e.target.value)}
            value={name || ''}
          />
          <input
            placeholder='email'
            onChange={e => setEmail(e.target.value)}
            value={email || ''}
          />
          <textarea
            placeholder='Précisez les dates et le contexte de votre demande'
            onChange={e => setMessage(e.target.value)}
            value={message || ''}
          />
          {/*pas de paramètre à cette fonction. Elle sera exécuté sur onClick mais elle ne cible rien dans le HTML*/}
          <button className='crossModaleButton' onClick={onClose}>
            <SlClose />
          </button>
        </div>

        <button className='modaleButton'>ENVOYER</button>
      </div>
    </>,
    //VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
    document.getElementById('portal')
    //VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
  )
}

export default ModalContact
