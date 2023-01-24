import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import { HiArrowNarrowRight } from 'react-icons/hi'
import { BiLogInCircle } from 'react-icons/bi'

import RandomReview from './RandomReview'

const Reviews = () => {
  const [vilainInfo1, setVilainInfo1] = useState([])
  const [vilainInfo2, setVilainInfo2] = useState([])
  const [userInfo1, setUserInfo1] = useState([])
  const [userInfo2, setUserInfo2] = useState([])
  const [isLoading1, setIsLoading1] = useState(false)
  const [isLoading2, setIsLoading2] = useState(false)

  const getRandomInt = () => {
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

  useEffect(() => {
    axios
      .get('https://randomuser.me/api?nat=en')
      .then(
        res =>
          console.log(res.data.results[0]) || setUserInfo1(res.data.results[0])
      )
      .then(res => setIsLoading1(true))
    axios
      .get('https://randomuser.me/api?nat=en')
      .then(
        res =>
          console.log(res.data.results[0]) || setUserInfo2(res.data.results[0])
      )
      .then(res => setIsLoading2(true))
  }, [])

  return (
    <div className='reviewsBlock'>
      <h1>17 Commentaires</h1>
      {/*-----------1ere review ------------ */}
      <div className='reviewsAndArrow'>
        <div className='randomReviews'>
          <div className='randomReview1'>
            <div className='randomReviewProfile1'>
              {console.log(
                'aaaaaaaaaa',
                isLoading1 ? userInfo1.picture.thumbnail : <div>Loading</div>
              )}
              <img
                src={isLoading1 ? userInfo1.picture.thumbnail : null}
                style={{ width: '35px', height: '35px' }}
              />
              <div className='randomReviewInformations1'>
                <h2>
                  {isLoading1 ? userInfo1.name.first : null}
                  {<br />}
                  {isLoading1 ? userInfo1.name.last : null}
                </h2>
                <div>date random </div>
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
              <img
                src={isLoading2 ? userInfo2.picture.thumbnail : null}
                style={{ width: '35px', height: '35px' }}
              />{' '}
              <div className='randomReviewInformations2'>
                <h2>
                  {isLoading2 ? userInfo2.name.first : null}
                  {<br />}
                  {isLoading2 ? userInfo2.name.last : null}
                </h2>{' '}
                <div>date random </div>
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
