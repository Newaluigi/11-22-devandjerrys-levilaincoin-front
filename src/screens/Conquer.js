import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayVilainServicePage from '../components/DisplayVilainServicePage'
import { HiArrowLeft } from 'react-icons/hi'

const Conquer = () => {
  // State réupération des infos de la catégorie concernée
  const [vilainInfo1, setVilainInfo1] = useState([])
  // UseEffect
  useEffect(() => {
    axios.get('http://localhost:4242/occupation/conquer').then(response => {
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
          - Choisissez votre prestataire pour conquérir le monde -
        </h2>
        <hr className='shine2'></hr>
        <div className='descriptionImg'>
          <span className='tag-wrap'>
            <img
              src={require('../assets/img/conquer.png')}
              alt='conquer'
              className='descImg'
            />
          </span>
          <p className='descriptionText'>
            Qu'allez-vous faire ce soir ? Sans doute la même chose que tous les
            soirs : tenter de conquérir le monde ! Spoiler : vous n'y arriverez
            pas tout seul. Seul un de nos cerveaux les plus vils sauront vous
            indiquer comment s'y prendre. Plans machiavéliques et implication
            totale garantis !
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

export default Conquer
