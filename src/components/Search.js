import './Search.css'

const Search = () => {
  return (
    <div className='searchModule'>
      <img
        className='glassPicture'
        src={require('../pictures/glass.png')}
        alt='loupe'
      />
      <input type='text' value='Rechercher' />
      {/* onChange */}
    </div>
  )
}

export default Search
