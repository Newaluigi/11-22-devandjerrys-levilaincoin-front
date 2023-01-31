import React, { useState, useEffect } from 'react'
import { v1 as uuidv1 } from 'uuid'
import axios from 'axios'
import ReactDOM from 'react-dom'
import logo from '../assets/img/leVilainCoinLogo.png'
import { SlClose } from 'react-icons/sl'

const ModalDevenirVilain1 = ({ open, children, onClose }) => {
  // Conditionne l'affichage du Modal
  if (!open) return null
  const [customers, setCustomers] = useState([])
  const [vilains, setVilains] = useState([])

  const [id, setId] = useState([])
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [price, setPrice] = useState()
  const [occupation, setOccupation] = useState()
  const [achievements, setAchievements] = useState()
  const [password, setPassword] = useState()
  const [passwordConfirmation, setPasswordConfirmation] = useState()

  useEffect(() => {
    // axios.get('http://localhost:4242/customers').then(response => {
    axios.get('http://localhost:4242/').then(response => {
      setVilains(response.data)
    })
  }, [])

  // XXXXXXXXXXXXXXXXXXXXXXX  POPULATE PROFILE  XXXXXXXXXXXXXXXXXXXXXXXXXX
  // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  const populateProfile = () => {
    if (firstName && lastName && email && price && occupation && achievements && password && passwordConfirmation) {
      // create new profile object
      let newProfile = {
        id: uuidv1(),
        name: firstName + " " + lastName,
        // lastName: lastName,
        price: price,
        achievements: achievements,
        occupation: occupation,
        email: email,
        password: password,
        passwordConfirmation: passwordConfirmation
      }


      // merging useState vilain with temp useState (on fusionne )
      let profile = [newProfile, ...vilains]


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


  return ReactDOM.createPortal(
    <>
      <div className='overlayModal'></div>
      {console.log(email)}
      <div className='modalStyle'>
        {children}
        <div className='form'>
          <div className='boxLogo'>
            <img src={logo} alt='logo' className='logo' />
          </div>
          <h1>Je veux devenir prestataire</h1>

          <input placeholder='Prénom'
            onChange={e => setFirstName(e.target.value)}
            value={firstName || ''}
          />
          <input placeholder='Nom'
            onChange={e => setLastName(e.target.value)}
            value={lastName || ''}
          />
          <input placeholder='Email'
            onChange={e => setEmail(e.target.value)}
            value={email || ''}
          />
          <input placeholder='Votre prix'
            onChange={e => setPrice(e.target.value)}
            value={price || ''}
          />
          {/* <input type='select' multiple='non' placeholder='Type de prestation' /> */}
          <select id='selectOccupation' onChange={(e) => setOccupation(e.target.value)}>
            <option placeholder=''>--Type de prestation--</option>
            <option value='Conquer'>Conquérir le monde</option>
            <option value='Escort'>Escort Vilain</option>
            <option value='Birthday'>Fête d'anniversaire</option>
            <option value='Nanny'>Bad nounou</option>
            <option value='Stag'>EVG et EVJF</option>
            <option value='Destroy'>Dégradation</option>
          </select>
          <textarea placeholder='Votre fierté' onChange={(e) => setAchievements(e.target.value)} />

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

export default ModalDevenirVilain1
