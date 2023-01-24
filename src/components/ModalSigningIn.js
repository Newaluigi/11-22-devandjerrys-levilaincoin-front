import React, { useState, useEffect } from 'react'
import { v1 as uuidv1 } from 'uuid'
import axios from 'axios'
import ReactDOM from 'react-dom'
import logo from '../assets/img/leVilainCoinLogo.png'
import { SlClose } from 'react-icons/sl'

const ModalSigningIn = ({ open, children, onClose }) => {
  const [customers, setCustomers] = useState([])

  const [id, setId] = useState([])
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [passwordConfirmation, setPasswordConfirmation] = useState()
  useEffect(() => {
    axios.get('http://localhost:4242/customers').then(response => {
      setCustomers(response.data)
    })
  }, [])

  // XXXXXXXXXXXXXXXXXXXXXXX  POPULATE PROFILE  XXXXXXXXXXXXXXXXXXXXXXXXXX
  // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  const populateProfile = () => {
    if (firstName && lastName && email && password && passwordConfirmation) {
      // create new profile object
      let newProfile = {
        id: uuidv1(),
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        passwordConfirmation: passwordConfirmation
      }
      // merging useState vilain with temp useState (on fusionne )
      let profile = [newProfile, ...customers]

      // setting useState with new profile
      setCustomers(profile)
      console.log(profile + '   ' + typeof profile.id)
      // clearing input field (on vide les temporary states)
      setId()
      setFirstName()
      setLastName()
      setEmail()
      setPassword()
      setPasswordConfirmation()
      // writing on server file
      saveJson(profile)
    }
  }

  // write to server side Json XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  const saveJson = updateCustomers => {
    // api url
    const url = 'http://localhost:4242/write/customers'

    axios.post(url, updateCustomers).then(Response => {
      console.log('incoming')
    })
  }

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
          <h1>Inscription</h1>
          <input
            placeholder='Firstname'
            onChange={e => setFirstName(e.target.value)}
            value={firstName || ''}
          />
          <input
            placeholder='Lastname'
            onChange={e => setLastName(e.target.value)}
            value={lastName || ''}
          />
          <input
            placeholder='email'
            onChange={e => setEmail(e.target.value)}
            value={email || ''}
          />
          <input
            placeholder='Password'
            onChange={e => setPassword(e.target.value)}
            value={password || ''}
          />
          <input
            placeholder='Password confirmation'
            onChange={e => setPasswordConfirmation(e.target.value)}
            value={passwordConfirmation || ''}
          />
          {/*pas de paramètre à cette fonction. Elle sera exécuté sur onClick mais elle ne cible rien dans le HTML*/}
          <button className='crossModaleDevenirVilain' onClick={onClose}>
            <SlClose />
          </button>
        </div>
        <button className='modaleButton' onClick={populateProfile}>
          Submit
        </button>
      </div>
    </>,
    //VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
    document.getElementById('portal')
    //VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
  )
}

export default ModalSigningIn
