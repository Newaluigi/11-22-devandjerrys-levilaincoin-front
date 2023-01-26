import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { HiArrowLeft } from 'react-icons/hi'

const onPressSubmit = () => {
  alert('A très vite pour de prochaines surprises...')
}

function Team() {
  const [mail, setEmail] = React.useState('')

  // const display = e => {
  //   e.preventDefault()
  //   console.log(email)
  // }
  return (
    <div>
      <div className='willBeBack'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <HiArrowLeft className='iconeBack' />{' '}
          <span className='beBack'> retour </span>
        </Link>
      </div>
      <div className='serviceDescription'>
        <hr className='shine2'></hr>
        <h2 className='headingDescription'>Notre vilaine équipe !</h2>
        <div className='descriptionText'>
          Nous avons à coeur de proposer un service qui mettra le chaos dans
          votre quotidien... Nous sommes trop dangereux pour être présents dans
          le catalogue du site. Mais nous proposons des créations web
          diaboliques ! Si vous êtes un wilder nous tenons à notre identité
          secrète de supervilain, en cas de divulgation vous vous exposez à une
          boucle infinie de représailles...
        </div>
        <hr className='shine1'></hr>
      </div>
      <div className='teamMain'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 col-sm-6'>
              <div className='our-team'>
                <img src={require('../assets/img/team4.jpg')} alt='destroy' />
                <div className='team-content'>
                  <h3 className='title'>Momozilla</h3>
                  <span className='post'>Dev Dark-end</span>
                  <ul className='social'>
                    <li>
                      <a href='https://www.linkedin.com/in/moana-vetea/'>
                        <FaLinkedinIn className='socialIcon' />
                      </a>
                    </li>
                    <li>
                      <a href='https://github.com/MoXvetea'>
                        <FaGithub className='socialIcon' />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-6'>
              <div className='our-team'>
                <img src={require('../assets/img/team2.jpg')} alt='destroy' />
                <div className='team-content'>
                  <h3 className='title'>Darmiedo</h3>
                  <span className='post'>CSS killer</span>
                  <ul className='social'>
                    <li>
                      <a href='https://www.linkedin.com/in/david-oviedo/'>
                        <FaLinkedinIn className='socialIcon' />
                      </a>
                    </li>
                    <li>
                      <a href='https://github.com/D4ve-Code'>
                        <FaGithub className='socialIcon' />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-6'>
              <div className='our-team'>
                <img src={require('../assets/img/team3.jpg')} alt='destroy' />
                <div className='team-content'>
                  <h3 className='title'>Markham</h3>
                  <span className='post'>Code warrior</span>
                  <ul className='social'>
                    <li>
                      <a href='https://www.linkedin.com/in/mariontassy/'>
                        <FaLinkedinIn className='socialIcon' />
                      </a>
                    </li>
                    <li>
                      <a href='https://github.com/Noiramd31'>
                        <FaGithub className='socialIcon' />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-6'>
              <div className='our-team'>
                <img src={require('../assets/img/team5.jpg')} alt='destroy' />
                <div className='team-content'>
                  <h3 className='title'>Crazylia</h3>
                  <span className='post'>Web Desaignant</span>
                  <ul className='social'>
                    <li>
                      <a href='https://www.linkedin.com/in/cecilia-caillaud/'>
                        <FaLinkedinIn className='socialIcon' />
                      </a>
                    </li>
                    <li>
                      <a href='https://github.com/CCeciliaDev'>
                        <FaGithub className='socialIcon' />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-6'>
              <div className='our-team'>
                <img
                  src={require('../assets/img/conquer2.png')}
                  alt='destroy'
                />
                <div className='team-content'>
                  <h3 className='title'>Lord Ryan</h3>
                  <span className='post'>Web Destructeur</span>
                  <ul className='social'>
                    <li>
                      <FaLinkedinIn className='socialIcon' />
                    </li>
                    <li>
                      <a href='https://github.com/RoadRiders'>
                        <FaGithub className='socialIcon' />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-6'>
              <div className='our-team'>
                <img src={require('../assets/img/team1.jpg')} alt='destroy' />
                <div className='team-content'>
                  <h3 className='title'>LE villain</h3>
                  <span className='post'>Web Desaigne</span>
                  <ul className='social'>
                    <li>
                      <a href='https://www.linkedin.com/in/alexandre-levillain/'>
                        <FaLinkedinIn className='socialIcon' />
                      </a>
                    </li>
                    <li>
                      <a href='https://github.com/Newaluigi'>
                        <FaGithub className='socialIcon' />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='news'>
        <div className='newsletter'>
          <h3>
            Ne manquez pas les prochaines vilainies : inscrivez-vous à notre
            newsletter !
          </h3>
          <div className='button-container'>
            {/* <form>            Email :
        <input
          type="email"
          name="email"
          id="email"
          placeholder="michel.drucker@caramail.fr"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      </form> */}

            <button onClick={() => onPressSubmit()}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Team
