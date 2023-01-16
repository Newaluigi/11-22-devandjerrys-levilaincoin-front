const Search = (props) => {
  const { search, setSearch } = props;
  return (
    <div className='searchModule'>
      <img
        className='glassPicture'
        src={require('../assets/img/glass.png')}
        alt='loupe'
      />
            <input className="inputSearch"
                value={search}
                type="text"
                placeholder="..."
                onChange={(e) => setSearch(e.target.value)}
            />
    </div>
  )
}

export default Search
