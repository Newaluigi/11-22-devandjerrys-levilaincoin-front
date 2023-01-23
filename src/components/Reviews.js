import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import { HiArrowNarrowRight } from 'react-icons/hi'
import { BiLogInCircle } from 'react-icons/bi'

import RandomReview from './RandomReview'

const Reviews = () => {
  const [vilainInfo1, setVilainInfo1] = useState([])
  const [vilainInfo2, setVilainInfo2] = useState([])
  function getRandomInt() {
    const min = Math.ceil(1)
    const max = Math.floor(62)
    return Math.floor(Math.random() * (max - min) + 1)
  }
  useEffect(() => {
    axios
      .get(`http://localhost:4242/selection/id/${getRandomInt()}`)
      .then(response => setVilainInfo1(response.data))
    axios
      .get(`http://localhost:4242/selection/id/${getRandomInt()}`)
      .then(response => setVilainInfo2(response.data))
  }, [])

  return (
    <div className='reviewsBlock'>
      <h1>2 Commentaires</h1>
      {/*-----------1ere review ------------ */}
      <div className='reviewsAndArrow'>
        <div className='randomReviews'>
          <div className='randomReview1'>
            <div className='randomReviewProfile1'>
              <BiLogInCircle className='randomReviewImage1' />
              <div className='randomReviewInformations1'>
                <h2>firstName</h2>
                <h3>Date</h3>
              </div>
            </div>
            <div className='reviewFromApi'>
              {vilainInfo1
                ? vilainInfo1.map(vilainInfo1 => {
                    return (
                      <RandomReview
                        key={vilainInfo1.id}
                        comments={vilainInfo1.comments}
                      />
                    )
                  })
                : null}
            </div>
          </div>
          {/*-----------2e review ------------ */}
          <div className='randomReview2'>
            <div className='randomReviewProfile2'>
              <BiLogInCircle className='randomReviewImage2' />
              <div className='randomReviewInformations2'>
                <h2>firstName</h2>
                <h3>Date</h3>
              </div>
            </div>
            <div className='reviewFromApi'>
              {vilainInfo2
                ? vilainInfo2.map(vilainInfo2 => {
                    return (
                      <RandomReview
                        key={vilainInfo2.id}
                        comments={vilainInfo2.comments}
                      />
                    )
                  })
                : null}
            </div>
          </div>
        </div>
        <HiArrowNarrowRight className='logoArrow' />
      </div>
    </div>
  )
}

export default Reviews

// {/* <>
// <div className='reviewsBlock'>
//   <h2>X Commentaires</h2>
//   <div className='reviewsFromApi'>
//     {/*---------------------  1ere review dans laquelle je dois appeler l'API -----------*/}
//     <div className='firstReview'>
//       <img className='profilePicture'>
//         <BiLogInCircle />
//       </img>
//       <div className='profileInformations'>
//         <h3>Fake name</h3>
//         <p>Date de la review</p>
//       </div>
//       <p className='contentFromApi'>Ici le contenu d'appel API comment</p>
//     </div>
//     {/*---------------------  2e review dans laquelle je dois appeler l'API -----------*/}
//     <div className='secondReview'>
//       2e review
//       <img className='profilePicture'>
//         <BiLogInCircle />
//       </img>
//       <div className='profileInformations'>
//         <h3>Fake name</h3>
//         <p>Date de la review</p>
//       </div>
//       <p className='contentFromApi'>Ici le contenu d'appel API comment</p>
//     </div>
//     {/*------------------- Icone flèche ---------------- */}
//     <HiArrowNarrowRight className='logoArrow' />
//   </div>
// </div>
// </> */}
