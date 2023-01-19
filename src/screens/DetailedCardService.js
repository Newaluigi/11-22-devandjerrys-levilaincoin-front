import CalendarFromScratch from '../components/CalendarFromScratch'
import Favorite from '../components/Favorite'

const DetailedCardService = props => {
  console.log(props)
  let vilainFav = true
  return (
    <div className='Card-item'>
      <div className='favorite'>
        <Favorite isFavorite={vilainFav} />
      </div>
      <div className='id'>
        <h2>{props.vilainInfo1.name}</h2>
        <hr></hr>
      </div>

      <div className='proposition'>
        <p>proposition de méchants</p>
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
        <div className='desc2'>
          "Ma fierté: {props.vilainInfo1.achievements}"
        </div>
      </div>
      <div className='comment'>
        <h4>COMMENTAIRES</h4>
        <hr></hr>
        <p>"{props.vilainInfo1.comments}"</p>
      </div>
      <div className='calendar'>
        <h4>RESERVER</h4>
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
