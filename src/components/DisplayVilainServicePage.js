import { Link } from 'react-router-dom'

const DisplayVilainServicePage = props => {
  const idVilain = props.vilainInfo1.id
  // const nameVilain = props.vilainInfo1.name;
  return (
    <div key={idVilain} className='vilain1'>
      {/* {console.log(props.vilainInfo1.id)} */}
      <div className='Cards-item'>
        <h3>{props.vilainInfo1.name}</h3>
        <div className='CardsFlex'>
          <img src={props.vilainInfo1.images.sm} alt={props.vilainInfo1.name} />
          <p className='Quickdescription'>{props.vilainInfo1.achievements}</p>
        </div>
        {/* <button onClick={() => deleteProfile(vilainInfo1.id)}> */}
        {/* <button>Delete</button> */}
        <div className='CardsFlex2'>
          <Link to={`/profile/id/${idVilain}`}>
            {/* <Link to={`/grosplan/name/${nameVilain}`}> */}
            <button className='ButtonCards'>En savoir plus</button>
          </Link>
          <h4>{props.vilainInfo1.price}</h4>
        </div>
      </div>
    </div>
  )
}

export default DisplayVilainServicePage
