import { Link } from 'react-router-dom'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const Team = () => {
  return (
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
  )
}
export default Team
