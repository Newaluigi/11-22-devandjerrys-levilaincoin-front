import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayVilainServicePage from '../components/DisplayVilainServicePage'
import { HiArrowLeft } from 'react-icons/hi'

const Birthday = () => {
  // State réupération des infos de la catégorie concernée
  const [vilainInfo1, setVilainInfo1] = useState([])
  useEffect(() => {
    axios.get('http://localhost:4242/occupation/birthday').then(response => {
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
        <h2 className='headingDescription'>
          - Choisissez votre prestataire pour un anniversaire -
        </h2>
        <hr className='shine2'></hr>
        <div className='descriptionImg'>
          <span className='tag-wrap'>
            <img
              src={require('../assets/img/birthday.png')}
              alt='birthday'
              className='descImg'
            />
          </span>
          <p className='descriptionText'>
            Un anniversaire à ruiner ? Nos vilains mettrons le feu aux bougies
            mais pas que...
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

export default Birthday

// {/* <h2>Choisissez votre prestataire pour un anniversaire</h2>
// <div className='descriptionImg'>
//   <p>
//     Un anniversaire à ruiner ? Nos vilains mettrons le feu aux bougies
//     mais pas que...
//   </p>
//   <img src={require('../assets/img/birthday.png')} alt='birthday' /> */}
