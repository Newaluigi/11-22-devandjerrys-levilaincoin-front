const DisplayVilainServicePage = (props) => {
    return (
        <div className='vilain1' >
          {/* {console.log(props.vilainInfo1.id)} */}
        <div className='Cards-item'>
          <h3>{props.vilainInfo1.name}</h3>
          <div className='CardsFlex'>
            <img src={props.vilainInfo1.images.sm} alt={props.vilainInfo1.name} />
            <p className='Quickdescription'>
              {props.vilainInfo1.achievements}
            </p>
          </div>
          {/* <button onClick={() => deleteProfile(vilainInfo1.id)}> */}
          {/* <button>Delete</button> */}
          <button className='ButtonCards'>En savoir plus</button>
        </div>
      </div>
    );
}

export default DisplayVilainServicePage
// key={props.vilainInfo1.id}