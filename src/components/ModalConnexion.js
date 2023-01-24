import React, { useState } from 'react'
// import axios from 'axios'
import ReactDOM from 'react-dom'
import logo from '../assets/img/leVilainCoinLogo.png'
import { SlClose } from 'react-icons/sl'

const ModalConnexion = ({ open, children, onClose }) => {
  const [name, setName] = useState()

  // useEffect(() => {
  //   axios.get('http://localhost:4242/customers').then(response => {
  //     setCustomers(response.data)
  //   })
  // }, [])

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
            placeholder='&#x1F4E7; email'
            onChange={e => setName(e.target.value)}
            value={name || ''}
          />
          <input
            type={'password'}
            placeholder='&#x1F512; password'
            // onChange={e => setOccupation(e.target.value)}
            // value={password || ''}
          />
          {/*pas de paramètre à cette fonction. Elle sera exécuté sur onClick mais elle ne cible rien dans le HTML*/}
          <button className='crossModaleButton' onClick={onClose}>
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

export default ModalConnexion
