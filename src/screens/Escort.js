import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Escort = () => {
  // State réupération des infos de la catégorie concernée
  const [vilainInfo1, setVilainInfo1] = useState([])
  useEffect(() => {
    axios.get('http://localhost:4242/occupation/escort').then(response => {
      setVilainInfo1(response.data)
    })
  }, [])

  return (
    <div className='page-Service'>
      <Link to='/'>
        <p> retour </p>
      </Link>
      <div className='serviceDescription'>
        <h2>Choisissez votre prestataire pour vous escorter</h2>
        <div className='descriptionImg'>
          <p>
            Description. Bonbon jujubes danish candy canes macaroon. Tiramisu
            powder cotton candy bear claw cupcake marzipan croissant shortbread
            gummi bears. Gummies sweet roll lemon drops halvah toffee. Apple pie
            jelly-o oat cake macaroon donut.
          </p>
          <img
            src={require('../assets/img/escort.png')}
            alt='escort'
            details='Escort vilain'
          />
        </div>
      </div>
      <div className='posts'>
        {vilainInfo1
          ? vilainInfo1.map(vilainInfo1 => {
              return (
                <div className='vilain1' key={vilainInfo1.id}>
                  <p>
                    <span>NAME</span> {vilainInfo1.name}
                  </p>
                  <br />
                  <p>
                    <span>JOB</span> {vilainInfo1.occupation}
                  </p>
                  <br />
                  <p>
                    <span>ACHIEVEMENTS</span> {vilainInfo1.achievements}
                  </p>
                  <br />
                  <img src={vilainInfo1.images.sm} alt={vilainInfo1.name} />   
                  {/* <button onClick={() => deleteProfile(vilainInfo1.id)}> */}
                  <button>Delete</button>
                </div>
              )
            })
          : null}
      </div>
    </div>
  )
}

export default Escort
