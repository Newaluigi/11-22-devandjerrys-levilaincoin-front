const Search = () => {
  return (
    <div className='searchModule'>
      <img
        className='glassPicture'
        src={require('../assets/img/glass.png')}
        alt='loupe'
      />
      <input className='inputSearch' type='text' value='Rechercher' />
      {/* onChange */}
    </div>
  )
}

export default Search
