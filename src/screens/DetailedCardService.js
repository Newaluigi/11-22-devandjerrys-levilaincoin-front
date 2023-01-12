import Favorite from '../components/Favorite'

const DetailedCardService = () => {
  // console.log(props)
  let vilainFav = true
  return (
    <div className='Card-item'>
      <div className='favorite'>
        <Favorite isFavorite={vilainFav} />
      </div>
      <div className='id'>
        <h2>Azazel</h2>
      </div>
      <div className='proposition'>
        <p>proposition de méchants</p>
      </div>
      <img
        className='photo'
        src='https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/57-azazel.jpg'
        alt='Azazel'
      />
      <div className='description'>
        <p>
          Cupcake ipsum dolor sit amet macaroon lollipop dragée. Chocolate cake
          brownie I love candy toffee.
        </p>
      </div>
      <div className='comment'>
        <p>Commentaires</p>
      </div>

      <div className='calendar'>
        <p>Calendrier</p>
        {/* <Calendar/> */}
      </div>
    </div>
  )
}

export default DetailedCardService
