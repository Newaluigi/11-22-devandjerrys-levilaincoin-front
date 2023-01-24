import CalendarFromScratch from '../components/CalendarFromScratch'
import Favorite from '../components/Favorite'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Rating from '../components/Rating'
import DisplayVilainServicePage from '../components/DisplayVilainServicePage'

const DetailedCardService = props => {
  let vilainFav = true
  const [vilainInfoA, setVilainInfoA] = useState([])
  const [vilainInfoB, setVilainInfoB] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getRandomInt = () => {
    const min = Math.ceil(1)
    const max = Math.floor(62)
    return Math.floor(Math.random() * (max - min) + 1)
  }
  useEffect(() => {
    axios
      .get(`http://localhost:4242/selection/id/${getRandomInt()}`)
      .then(response => {
        setVilainInfoA(response.data[0])
      })
      .then(() => setIsLoading(true))
  }, [])
  useEffect(() => {
    axios
      .get(`http://localhost:4242/selection/id/${getRandomInt()}`)
      .then(response => {
        setVilainInfoB(response.data[0])
      })
      .then(() => setIsLoading(true))
  }, [])

  return (
    <div className='Card-item'>
      {console.log('vilainInfoA', vilainInfoA)}
      <div className='favorite'>
        <Favorite isFavorite={vilainFav} />
      </div>
      <div className='id'>
        <h2>{props.vilainInfo1.name.toUpperCase()}</h2>
        <hr></hr>
      </div>
      <div className='proposition'>
        <h2>SUGGESTIONS</h2>
        <hr></hr>
        <div className='propoA'>
          {isLoading ? (
            <DisplayVilainServicePage
              key={vilainInfoA.id}
              vilainInfo1={vilainInfoA}
            />
          ) : (
            <div>Loading ..</div>
          )}
          {/* ))} */}
        </div>
        <div className='propoB'>
          {isLoading ? (
            <DisplayVilainServicePage
              key={vilainInfoB.id}
              vilainInfo1={vilainInfoB}
            />
          ) : (
            <div>Loading ..</div>
          )}
        </div>
      </div>
      <img
        className='photo_mobile'
        src={props.vilainInfo1.images.sm}
        alt={props.vilainInfo1.name}
      />
      <img
        className='photo_desktop'
        src={props.vilainInfo1.images.md}
        alt={props.vilainInfo1.name}
      />
      <div className='description'>
        <div className='desc1'>
          {props.vilainInfo1.occupation === 'conquer'
            ? `Je suis un conquérant, je peux vous aider dans vos réalisations de domination.`
            : null}
          {props.vilainInfo1.occupation === 'nanny' ? 'nanny' : null}
          {props.vilainInfo1.occupation === 'birthday'
            ? `Je suis l'animateur idéal pour saboter les anniversaires de vos enfants ou de vos amis. `
            : null}
          {props.vilainInfo1.occupation === 'escort'
            ? `Je suis BG. Je mesure ${props.vilainInfo1.appearance.height[1]}.`
            : null}
          {props.vilainInfo1.occupation === 'destroy'
            ? `Je suis un destructeur dans l'âme, je détruit tout sur mon passage. `
            : null}
          {props.vilainInfo1.occupation === 'stag'
            ? `Votre ami(e) qui se marie vous saoule, je peux ruiner son EVJF/EVG.`
            : null}
        </div>
        <div className='desc3'>
          <br />
          Cotton candy powder topping bear claw cake tiramisu chocolate bar
          bonbon sweet. Marshmallow oat cake jelly-o sesame snaps sweet roll.
          Sweet roll powder bear claw cheesecake wafer carrot cake. Cupcake
          gummies cookie jelly bonbon cake candy canes dragée. Fruitcake
          chocolate chupa chups cake fruitcake dessert gingerbread caramels.
          Chocolate bar dessert ice cream carrot cake bear claw sweet roll
          powder. Wafer chocolate bar sugar plum apple pie dessert.
        </div>
        <div className='desc2'>
          <br />
          {'"Ma fierté:'}
          <br /> {props.vilainInfo1.achievements}
          {'"'}
        </div>
      </div>
      <div className='comment'>
        <h2>COMMENTAIRES</h2>
        <hr></hr>
        <p>
          {'"'}
          {props.vilainInfo1.comments}
          {'"'}
        </p>
      </div>
      <div className='ratingStar'>
        <Rating star={props.vilainInfo1.rating} />
      </div>
      <div className='calendarCard'>
        <h2>RESERVER</h2>
        <hr></hr>
        <CalendarFromScratch />
      </div>
      <div className='price'>
        <p>{props.vilainInfo1.price}</p>
      </div>
    </div>
  )
}
export default DetailedCardService
