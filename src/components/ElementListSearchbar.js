import { Link } from 'react-router-dom'
import { useRef } from 'react'
import CustomHookClickOutside from './CustomHookClickOutside'

const ElementListSearchbar = props => {
  const {
    vilainsDisplayed,
    setSearch,
    setIsGlassDisplayed,
    setisInputDisplayed
  } = props
  const idVilain = vilainsDisplayed.id

  const searchResult = useRef()

  // XXXXXXXXXXX Click  on selected character==> go to profile page XXXXXXXXXXXXXXXXXXX
  // XXXXXXXXX  + Mobile version close searchbar open glass picture XXXXXXXXXXXXXXXXXXX
  const closeSearchList = e => {
    e.preventDefault()
    setisInputDisplayed('')
    setIsGlassDisplayed('')
    setSearch('')
  }
  // XXXXXXXXXXXX Custom HOOk call closes search onClick anywhere out of listXXXXXXXXXXXXX

  CustomHookClickOutside(searchResult, () => {
    setisInputDisplayed('')
    setIsGlassDisplayed('')
    setSearch('')
  })

  return (
    <>
      <div
        className='searchResult'
        key={vilainsDisplayed.id}
        onClick={closeSearchList}
        ref={searchResult}
      >
        <Link to={`/profile/id/${idVilain}`}>
          <div className='selection'>
            <div className='vilainName'>{vilainsDisplayed.name}</div>
            <img
              src={vilainsDisplayed.images.xs}
              alt={vilainsDisplayed.name}
            />{' '}
          </div>
        </Link>
      </div>
    </>
  )
}

export default ElementListSearchbar
