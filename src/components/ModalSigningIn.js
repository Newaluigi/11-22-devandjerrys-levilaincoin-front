import React, { useState, useEffect } from 'react'
import { v1 as uuidv1 } from 'uuid'
import axios from 'axios'
import ReactDOM from 'react-dom'
const ModalSigningIn = ({ open, children, onClose }) => {
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
      console.log(profile)
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
          <h1>Inscription</h1>
          <h1>Who are you?</h1>
          <br />
          <input
            placeholder='name'
            onChange={e => setName(e.target.value)}
            value={name || ''}
          />
          <br />
          <input
            placeholder='occupation'
            onChange={e => setOccupation(e.target.value)}
            value={occupation || ''}
          />
          <br />
          <input
            placeholder='achievements'
            onChange={e => setAchievements(e.target.value)}
            value={achievements || ''}
          />
          <br />
          {/*pas de paramètre à cette fonction. Elle sera exécuté sur onClick mais elle ne cible rien dans le HTML*/}
          <button onClick={populateProfile}>Submit</button>
        </div>

        <button onClick={onClose}>Close Modal</button>
      </div>
    </>,
    //VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
    document.getElementById('portal')
    //VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
  )
}

export default ModalSigningIn
