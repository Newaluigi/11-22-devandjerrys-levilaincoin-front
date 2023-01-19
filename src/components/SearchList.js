const SearchList = props => {
  const { search, vilainsDisplayed } = props

  // XXXXXXXXXXXXXXXXXXXXXX Click event on selected character XXXXXXXXXXXXXXXXXXXXXXXXX
  const testClick = e => {
    e.preventDefault()
    console.log('hiha!!')
  }
  // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  return (
    <div className='liste'>
      {search.length > 0
        ? vilainsDisplayed
            .filter(vilainDisplayed => vilainDisplayed.name.includes(search))
            .map(vilainDisplayed => (
              <div
                className='selection'
                key={vilainDisplayed.id}
                onClick={testClick}
              >
                {vilainDisplayed.name}{' '}
                <img
                  src={vilainDisplayed.images.xs}
                  alt={vilainDisplayed.name}
                />{' '}
              </div>
            ))
        : null}
    </div>
  )
}

export default SearchList
