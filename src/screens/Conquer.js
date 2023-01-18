import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayVilainServicePage from '../components/DisplayVilainServicePage'
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
      <Link to='/'>
        <p> retour </p>
      </Link>
      <div className='serviceDescription'>
        <h2>Choisissez votre prestataire pour conquérir le monde</h2>
        <div className='descriptionImg'>
          <p>
            Description. Bonbon jujubes danish candy canes macaroon. Tiramisu
            powder cotton candy bear claw cupcake marzipan croissant shortbread
            gummi bears.
          </p>
          <img
            src={require('../assets/img/conquer.png')}
            alt='conquer'
            // details='Conquérir le monde'
          />
        </div>
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
