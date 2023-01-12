import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Destroy = () => {
  // State réupération des infos de la catégorie concernée
  const [vilainInfo1, setVilainInfo1] = useState([])
  useEffect(() => {
    axios.get('http://localhost:4242/occupation/destroy').then(response => {
      setVilainInfo1(response.data)
    })
  }, [])

  return (
    <div className='page-Service'>
      <Link to='/'>
        <p> retour </p>
      </Link>
      <div className='serviceDescription'>
        <h2>Choisissez votre prestataire pour détruire</h2>
        <div className='descriptionImg'>
          <p>
            Description. Bonbon jujubes danish candy canes macaroon. Tiramisu
            powder cotton candy bear claw cupcake marzipan croissant shortbread
            gummi bears. Gummies sweet roll lemon drops halvah toffee. Apple pie
            jelly-o oat cake macaroon donut.
          </p>
          <img
            src={require('../assets/img/destroy.png')}
            alt='destroy'
            details='Dégradation en tout genre'
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
                  {/*paramètre passé à cette fonction. Elle sera exécuté sur onClick et concerne cette id 
              strictement !!!! */}
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

export default Destroy
