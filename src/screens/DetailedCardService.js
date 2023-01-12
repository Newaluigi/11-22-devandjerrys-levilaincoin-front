import CalendarFromScratch from '../components/CalendarFromScratch'

const DetailedCardService = () => {
  // console.log(props)
  return (
    <div className='Card-item'>
      <div className='favorite'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/3/35/Emoji_u2665.svg'
          alt='favorite'
        />
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
        <CalendarFromScratch />
      </div>
    </div>
  )
}

export default DetailedCardService
