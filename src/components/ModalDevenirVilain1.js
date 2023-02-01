import React, { useState, useEffect } from 'react'
import { v1 as uuidv1 } from 'uuid'
import axios from 'axios'
import ReactDOM from 'react-dom'
import logo from '../assets/img/leVilainCoinLogo.png'
import { SlClose } from 'react-icons/sl'
import nuclearbomb from "../assets/img/nuclear-bomb.svg"

const ModalDevenirVilain1 = ({ open, children, onClose }) => {
  // Conditionne l'affichage du Modal
  if (!open) return null
  // const [customers, setCustomers] = useState([])
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
      // setCustomers(response.data)
    })
  }, [])

  // XXXXXXXXXXXXXXXXXXXXXXX  POPULATE PROFILE  XXXXXXXXXXXXXXXXXXXXXXXXXX
  // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  const populateProfile = () => {
    if (firstName) {
      // create new profile object
      let newProfile = {
        id: uuidv1(),
        // firstName: firstName,
        name: firstName + " " + lastName,
        lastName: lastName,
        price: price,
        achievements: achievements,
        occupation: occupation,
        images: {"sm": "../assets/img/nuclear-bomb.svg"}
        // email: email,
        // password: password,
        // passwordConfirmation: passwordConfirmation
      }
      console.log("eeeeeeeeeeeeeeeeeeeeeeeeeee");

      // merging useState vilain with temp useState (on fusionne )
      // let profile = [newProfile, ...customers]
      let profile = [newProfile, ...vilains]

console.log(profile);
      // setting useState with new profile
      setVilains(profile)
      // clearing input field (on vide les temporary states)
      setId()
      setFirstName()
      setLastName()
      setEmail()
      setPrice()
      setOccupation()
      setAchievements()
      setPassword()
      setPasswordConfirmation()
      // writing on server file
      saveJson(profile)
    }
  }

  // write to server side Json XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  const saveJson = updateCustomers => {
    // api url
    const url = 'http://localhost:4242/write/villains'

    axios.post(url, updateCustomers).then(Response => {
      console.log('incoming')
    })
  }


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

          <input placeholder='Prénom'
            onChange={e => setFirstName(e.target.value)}
            value={firstName || ''}
          />
          {/* {console.log(firstName)}
          {console.log(email)}
          {console.log(occupation)}
          {console.log(achievements)}
          {console.log(price)} */}
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
            <option value='conquer'>Conquérir le monde</option>
            <option value='escort'>Escort Vilain</option>
            <option value='birthday'>Fête d'anniversaire</option>
            <option value='nanny'>Bad nounou</option>
            <option value='stag'>EVG et EVJF</option>
            <option value='destroy'>Dégradation</option>
          </select>
          <textarea placeholder='Votre fierté' onChange={(e) => setAchievements(e.target.value)} />

          <button className='crossModaleDevenirVilain' onClick={onClose}>
            <SlClose />
          </button>
        </div>
        {/* <button className='modaleButton' >SOUMETTRE</button> */}
        <button className='modaleButton' onClick={populateProfile}>SOUMETTRE</button>
      </div>
    </>,
    //VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
    document.getElementById('portal')
    //VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
  )
}

export default ModalDevenirVilain1
