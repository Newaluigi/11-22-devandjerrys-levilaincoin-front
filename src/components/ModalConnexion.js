import React, { useState, useEffect } from 'react'
import { v1 as uuidv1 } from 'uuid'
import axios from 'axios'
import ReactDOM from 'react-dom'
import logo from '../assets/img/leVilainCoinLogo.png'
import { SlClose } from 'react-icons/sl'

const ModalConnexion = ({ open, children, onClose }) => {
  const [customers, setCustomers] = useState([])

  const [id, setId] = useState([])
  const [name, setName] = useState()
  const [occupation, setOccupation] = useState()
  const [achievements, setAchievements] = useState()

  useEffect(() => {
    axios.get('http://localhost:4242/customers').then(response => {
      setCustomers(response.data)
    })
  }, [])

  // XXXXXXXXXXXXXXXXXXXXXXX  POPULATE PROFILE  XXXXXXXXXXXXXXXXXXXXXXXXXX
  // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  const populateProfile = () => {
    if (name && occupation && achievements) {
      // create new profile object
      let newProfile = {
        id: uuidv1(),
        name: name,
        occupation: occupation,
        achievements: achievements
      }
      // merging useState vilain with temp useState (on fusionne )
      let profile = [...customers, newProfile]
      // setting useState with new profile
      setCustomers(profile)
      console.log(profile + '   ' + typeof profile.id)
      // clearing input field (on vide les temporary states)
      setId()
      setName()
      setAchievements()
      setOccupation()
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
          {/* <h1>Connexion</h1> */}
          {/* <h2>Si vous avez déjà un compte, veuillez vous identifier.</h2> */}
          <div className='boxLogo'>
            <img src={logo} alt='logo' className='logo' />
          </div>
          <input
            placeholder='&#x1F4E7; email'
            onChange={e => setName(e.target.value)}
            value={name || ''}
          />
          <input
            placeholder='&#x1F512; password'
            onChange={e => setOccupation(e.target.value)}
            value={occupation || ''}
          />
          {/*pas de paramètre à cette fonction. Elle sera exécuté sur onClick mais elle ne cible rien dans le HTML*/}
          <button className='crossModaleButton' onClick={onClose}>
            <SlClose />
          </button>
        </div>

        <button className='modaleButton' onClick={populateProfile}>
          SE CONNECTER
        </button>
      </div>
    </>,
    //VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
    document.getElementById('portal')
    //VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
  )
}

export default ModalConnexion
