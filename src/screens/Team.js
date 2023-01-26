import { Link } from 'react-router-dom'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const Team = () => {
  return (
    <div>
      <div className='willBeBack'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          {/* <HiArrowLeft className='iconeBack' />{' '} */}
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
          secrête de supervilain, en cas de divulgation vous vous exposez à une
          boucle infinie de représailles...
        </div>
        <hr className='shine1'></hr>
      </div>
      <div className='teamMain'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 col-sm-6'>
              <div className='our-team'>
                <img src={require('../assets/img/team1.jpg')} alt='destroy' />
                <div className='team-content'>
                  <h3 className='title'>Momozilla</h3>
                  <span className='post'>Dev Dark-end</span>
                  <ul className='social'>
                    <li>
                      <FaLinkedinIn className='socialIcon' />
                    </li>
                    <li>
                      <FaGithub className='socialIcon' />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-6'>
              <div className='our-team'>
                <img src={require('../assets/img/team2.jpg')} alt='destroy' />
                <div className='team-content'>
                  <h3 className='title'>Da-rmi-edo</h3>
                  <span className='post'>CSS killer</span>
                  <ul className='social'>
                    <li>
                      <FaLinkedinIn className='socialIcon' />
                    </li>
                    <li>
                      <FaGithub className='socialIcon' />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-6'>
              <div className='our-team'>
                <img src={require('../assets/img/team3.jpg')} alt='destroy' />
                <div className='team-content'>
                  <h3 className='title'>Marion</h3>
                  <span className='post'>Web Developer</span>
                  <ul className='social'>
                    <li>
                      <FaLinkedinIn className='socialIcon' />
                    </li>
                    <li>
                      <FaGithub className='socialIcon' />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-6'>
              <div className='our-team'>
                <img src={require('../assets/img/destroy.png')} alt='destroy' />
                <div className='team-content'>
                  <h3 className='title'>Cécilia</h3>
                  <span className='post'>Web Designer</span>
                  <ul className='social'>
                    <li>
                      <FaLinkedinIn className='socialIcon' />
                    </li>
                    <li>
                      <FaGithub className='socialIcon' />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-6'>
              <div className='our-team'>
                <img src={require('../assets/img/destroy.png')} alt='destroy' />
                <div className='team-content'>
                  <h3 className='title'>Ryan</h3>
                  <span className='post'>Web Developer</span>
                  <ul className='social'>
                    <li>
                      <FaLinkedinIn className='socialIcon' />
                    </li>
                    <li>
                      <FaGithub className='socialIcon' />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-6'>
              <div className='our-team'>
                <img src={require('../assets/img/team1.jpg')} alt='destroy' />
                <div className='team-content'>
                  <h3 className='title'>A-LEvillain</h3>
                  <span className='post'>Web Designer</span>
                  <ul className='social'>
                    <li>
                      <FaLinkedinIn className='socialIcon' />
                    </li>
                    <li>
                      <FaGithub className='socialIcon' />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Team
