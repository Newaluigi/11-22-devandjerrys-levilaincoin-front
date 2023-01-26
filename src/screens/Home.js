// zaeaozjieaozijeoaizje
import Service from '../components/Service'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Reviews from '../components/Reviews'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { HiArrowNarrowRight } from 'react-icons/hi'
import { HiOutlineChevronDoubleRight } from 'react-icons/hi'
import { HiOutlineChevronDoubleLeft } from 'react-icons/hi'
import { CgArrowLongRightR } from 'react-icons/cg'
import { CgArrowLongLeftR } from 'react-icons/cg'
import { AiOutlineLine } from 'react-icons/ai'
import VilainButton from '../components/VilainButton'
import Search from '../components/Search'
import BurgerMenu from '../components/BurgerMenu'
import TeamButton from '../components/TeamButton'
import ResponsabilityButton from '../components/ResponsabilityButton'

const Home = () => {
  return (
    <div className='allElements'>
      <div className='firstElement'>
        <div className='titleHome'>
          {' '}
          <h1 className='titleHome'>BIENVENUE EN ENFER</h1>
          <h1 className='titleHome'>VOS DESIRS FERONT DESORDRE</h1>
        </div>
        <img
          className='lineHome'
          src={require('../assets/img/separateur.png')}
        />
        <h2 className='subTitleHome'>
          {' '}
          - Soudoyez-nous pour garder l'anonymat -{' '}
        </h2>
        <div className='globalIndicator'>
          <div className='indicator'>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>{' '}
      </div>
      <div className='secondElement'>
        <div className='titleService'>
          <h1 className='titleService'>SELECTIONNEZ VOTRE</h1>
          <h1 className='titleService'>
            <CgArrowLongLeftR style={{ padding: '0 20px' }} />
            CATEGORIE
            <CgArrowLongRightR style={{ padding: '0 20px' }} />
          </h1>
        </div>
        <div className='rightContent'>
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
                details='EVG et EVJF'
              />
            </Link>
            <Link to='/destroy' className='linkCardService'>
              <Service
                img={require('../assets/img/destroy.png')}
                alt='destroy'
                details='Dégradation'
              />
            </Link>
          </section>

          {/* ----------------------- les Reviews -------------------- */}
          <Reviews className='sectionReviews' />
        </div>
      </div>
    </div>
  )
}

export default Home

{
  /* ----------------------- Banner du site -------------------- */
  /* <img
          className='bannerMobile'
          src={require('../assets/img/banner_resize.png')}
          alt='banner du site'
        ></img>
        <img
          className='bannerDesktop'
          src={require('../assets/img/banner.png')}
          alt='banner du site'
        ></img> */
  /* ----------------------- Les catégories -------------------*/
}
