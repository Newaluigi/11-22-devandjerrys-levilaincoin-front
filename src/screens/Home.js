import Service from '../components/Service'
import Header from '../components/Header'

// import { Routes, Route } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Header />
      <img
        className='banner'
        src={require('../assets/img/banner_resize.png')}
        alt='banner du site'
      ></img>
      <section id='home-cardService'>
        <Service
          img={require('../assets/img/conquer.png')}
          alt='conquer'
          details='Conquérir le monde'
        />
        <Service
          img={require('../assets/img/escort.png')}
          alt='escort'
          details='Escort vilain'
        />
        <Service
          img={require('../assets/img/birthday.png')}
          alt='birthday'
          details="Fête d'anniversaire"
        />
        <Service
          img={require('../assets/img/nanny.png')}
          alt='nanny'
          details='Bad nounou'
        />
        <Service
          img={require('../assets/img/evjf.png')}
          alt='stag'
          details='EVG /EVJF'
        />
        <Service
          img={require('../assets/img/destroy.png')}
          alt='destroy'
          details='Dégradation en tout genre'
        />
      </section>
    </div>
  )
}

export default Home
