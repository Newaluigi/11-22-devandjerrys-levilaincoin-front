import React, { useState } from 'react'
// import axios from 'axios'
import ReactDOM from 'react-dom'
import logo from '../assets/img/leVilainCoinLogo.png'
import { SlClose } from 'react-icons/sl'
import { Link } from 'react-router-dom'
import CustomHookClickOutside from './CustomHookClickOutside'
import { useRef } from 'react'

const ModalConnexion = ({ open, children, onClose, onCloseOk, leMotDePasse, motDePasse, setConnexionsetIsOpen }) => {
  const [name, setName] = useState();

  if (!open) return null
  return ReactDOM.createPortal(
    <>
      <div className='overlayModal'></div>
      <div className='modalStyle' >
        {children}
        <div className='form'>
          <div className='boxLogo'>
            <img src={logo} alt='logo' className='logo' />
          </div>
          <input
            placeholder='&#x1F4E7; email'
            onChange={e => setName(e.target.value)}

            value={name || ''}
          />
          <input
            type={'password'}
            placeholder='&#x1F512; password'
            onChange={(e) => leMotDePasse(e.target.value)}
            value={motDePasse || ''}
            />


          {/*pas de paramètre à cette fonction. Elle sera exécuté sur onClick mais elle ne cible rien dans le HTML*/}
          <button className='crossModaleButton' onClick={onClose}>
            <SlClose />
          </button>
        </div>
        <Link to='/UserProfilePage'>
        {/* <button className='modaleButton' onClick= {onClose}> */}
        <button className='modaleButton' onClick={(e) => onCloseOk(e)}>
          SE CONNECTER
        </button>
        </Link>
      </div>
    </>,
    //VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
    document.getElementById('portal')
    //VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
  )
}

export default ModalConnexion
