import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayVilainServicePage from '../components/DisplayVilainServicePage'
import { HiArrowLeft } from 'react-icons/hi'

const Stag = () => {
  // State réupération des infos de la catégorie concernée
  const [vilainInfo1, setVilainInfo1] = useState([])
  // UseEffect
  useEffect(() => {
    axios.get('http://localhost:4242/occupation/stag').then(response => {
      setVilainInfo1(response.data)
    })
  }, [])

  return (
    <div className='page-Service'>
      <div className='willBeBack'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <HiArrowLeft className='iconeBack' />{' '}
          <span className='beBack'> retour </span>
        </Link>
      </div>
      <div className='serviceDescription'>
        <hr className='shine2'></hr>
        <h2 className='headingDescription'>
          Choisissez votre prestataire pour un EVG/EVJF
        </h2>
        <div className='descriptionImg'>
          <span className='tag-wrap'>
            <img
              src={require('../assets/img/evjf.png')}
              alt='stag'
              className='descImg'
            />
          </span>
          <p className='descriptionText'>
            Vous souhaitez enterrez la vie de jeune garçon ou de jeune fille
            d'une connaissance ? Ici nos professionnels les enterreront tout
            court.
          </p>
        </div>
        <hr className='shine1'></hr>
      </div>
      <div className='posts'>
        {vilainInfo1
          ? vilainInfo1.map(vilainInfo1 => {
              return (
                <DisplayVilainServicePage
                  vilainInfo1={vilainInfo1}
                  key={vilainInfo1.id}
                  // key={vilainInfo1.name}
                />
              )
            })
          : null}
      </div>
    </div>
  )
}

export default Stag
