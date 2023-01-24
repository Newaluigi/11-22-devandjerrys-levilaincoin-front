import { Link } from 'react-router-dom'
import Rating from './Rating'

const DisplayVilainServicePage = props => {
  const idVilain = props.vilainInfo1.id
  // const nameVilain = props.vilainInfo1.name;
  return (
    <div key={idVilain} className='vilain1'>
      <div className='Cards-item'>
        <div className='picture'>
          <img src={props.vilainInfo1.images.sm} alt={props.vilainInfo1.name} />
        </div>
        <div className='CardsFlex'>
          <h3>{props.vilainInfo1.name}</h3>
          {/* <p className='Quickdescription'>{props.vilainInfo1.achievements}</p> */}
          <h4>{props.vilainInfo1.price}</h4>
        </div>
        <div className='CardsFlex2'>
          <Link to={`/profile/id/${idVilain}`}>
            <button className='ButtonCards'>En savoir plus</button>
          </Link>
        </div>
      </div>
    </div>

    // {/* <button onClick={() => deleteProfile(vilainInfo1.id)}> */}
    // {/* <button>Delete</button> */}
  )
}

export default DisplayVilainServicePage
