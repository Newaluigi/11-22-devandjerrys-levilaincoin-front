import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayVilainServicePage from '../components/DisplayVilainServicePage'

const Nanny = () => {
  // State réupération des infos de la catégorie concernée
  const [vilainInfo1, setVilainInfo1] = useState([])
  useEffect(() => {
    axios.get('http://localhost:4242/occupation/nanny').then(response => {
      setVilainInfo1(response.data)
    })
  }, [])

  return (
    <div className='page-Service'>
      <Link to='/'>
        <p> retour </p>
      </Link>
      <div className='serviceDescription'>
        <h2>Choisissez votre prestataire pour une nounou</h2>
        <div className='descriptionImg'>
          <p>
            Vous souhaitez garder vos petits montres ? Faites appel à un monstre
            professionnel qui saura les hanter jusqu'à la fin de leurs jours et
            fera la joie de leur futur psy.
          </p>
          <img src={require('../assets/img/nanny.png')} alt='nanny' />
        </div>
      </div>
      <div className='posts'>
        {vilainInfo1
          ? vilainInfo1.map(vilainInfo => {
              return (
                <DisplayVilainServicePage
                  vilainInfo1={vilainInfo}
                  key={vilainInfo.id}
                />
              )
            })
          : null}
      </div>
    </div>
  )
}
export default Nanny
