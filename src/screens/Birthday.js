import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
      <Link to='/'>
        <p> retour </p>
      </Link>

      <div className='divGlobale'>
        <div className='serviceDescription'>
          <h2>Choisissez votre prestataire pour un anniversaire</h2>
          <div className='descriptionImg'>
            <p>
              Description. Bonbon jujubes danish candy canes macaroon. Tiramisu
              powder cotton candy bear claw cupcake marzipan croissant
              shortbread gummi bears.
            </p>
            <img
              src={require('../assets/img/birthday.png')}
              alt='birthday'
              // details="Fête d'anniversaire"
            />
          </div>
        </div>
        <div className='posts'>
          {vilainInfo1
            ? vilainInfo1.map(vilainInfo1 => {
                return (
                  <div className='vilain1' key={vilainInfo1.id}>
                    <div className='Cards-item'>
                      <h3>{vilainInfo1.name}</h3>
                      <div className='CardsFlex'>
                        <img
                          src={vilainInfo1.images.sm}
                          alt={vilainInfo1.name}
                        />
                        <p className='Quickdescription'>
                          {vilainInfo1.achievements}
                        </p>
                      </div>
                      {/*paramètre passé à cette fonction. Elle sera exécuté sur onClick et concerne cette id 
              strictement !!!! */}
                      {/* <button onClick={() => deleteProfile(vilainInfo1.id)}> */}
                      {/* <button>Delete</button> */}
                      <button className='ButtonCards'>En savoir plus</button>
                    </div>
                  </div>
                )
              })
            : null}
        </div>
      </div>
    </div>
  )
}

export default Birthday
