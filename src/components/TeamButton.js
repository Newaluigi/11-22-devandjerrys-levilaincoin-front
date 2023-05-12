import { Link } from 'react-router-dom'

const TeamButton = () => {
  return (
    <div>
      <Link to='/team' className='boutonTeam'>
        Notre équipe
      </Link>
    </div>
  )
}

export default TeamButton
