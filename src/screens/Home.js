import Service from '../components/Service'
import { Link } from 'react-router-dom'
// import 'airbnb-js-shims'

const Home = () => {
  return (
    <div>
      <img
        className='banner'
        src={require('../assets/img/banner_resize.png')}
        alt='banner du site'
      ></img>
      <section id='home-cardService'>
        <Link to='/conquer' className='linkCardService'>
          <Service
            img={require('../assets/img/conquer.png')}
            alt='conquer'
            details='Conquérir le monde'
          />
        </Link>
        <Link to='/escort' className='linkCardService'>
          <Service
            img={require('../assets/img/escort.png')}
            alt='escort'
            details='Escort vilain'
          />
        </Link>
        <Link to='/birthday' className='linkCardService'>
          <Service
            img={require('../assets/img/birthday.png')}
            alt='birthday'
            details="Fête d'anniversaire"
          />
        </Link>
        <Link to='/nanny' className='linkCardService'>
          <Service
            img={require('../assets/img/nanny.png')}
            alt='nanny'
            details='Bad nounou'
          />
        </Link>
        <Link to='/stag' className='linkCardService'>
          <Service
            img={require('../assets/img/evjf.png')}
            alt='stag'
            details='EVG /EVJF'
          />
        </Link>
        <Link to='/destroy' className='linkCardService'>
          <Service
            img={require('../assets/img/destroy.png')}
            alt='destroy'
            details='Dégradation en tout genre'
          />
        </Link>
      </section>
    </div>
  )
}

export default Home
