import Service from '../components/Service'
import Header from '../components/Header.js'
import './Home.css'
// import { Routes, Route } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Header />
      <section id='home-cardService'>
        <Service
          img='/conquer.png'
          alt='conquer'
          details='Conquérir le monde'
        />
        <Service img='/escort.png' alt='escort' details='Escort vilain' />
        <Service
          img='/birthday.png'
          alt='birthday'
          details="Fête d'anniversaire"
        />
        <Service img='/nanny.png' alt='nanny' details='Bad nounou' />
        <Service img='/evjf.png' alt='stag' details='EVG /EVJF' />
        <Service
          img='/destroy.png'
          alt='destroy'
          details='Dégradation en tout genre'
        />
      </section>
    </div>
  )
}

export default Home
