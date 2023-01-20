import { useState } from 'react';
import ElementListSearchbar from './ElementListSearchbar';
import ClickAwayListener from '@mui/base/ClickAwayListener'

const SearchList = props => {
  const { search, vilainsDisplayed, setSearch,setIsGlassDisplayed,setisInputDisplayed } = props;




  return (
    <div className='liste' >
      {search.length > 0
        ? vilainsDisplayed
            .filter(vilainDisplayed => vilainDisplayed.name.includes(search))
            .map(vilainsDisplayed => (
              <ElementListSearchbar vilainsDisplayed={vilainsDisplayed} search={search} setSearch={setSearch} setIsGlassDisplayed={setIsGlassDisplayed} setisInputDisplayed={setisInputDisplayed} key={vilainsDisplayed.id}/>
            ))
        : null}
    </div>

  )
}

export default SearchList
