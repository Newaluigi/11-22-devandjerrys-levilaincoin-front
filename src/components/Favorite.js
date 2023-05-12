
import React, {useState} from 'react'

function Favorite() {
  const [isFavorite, setIsFavorite] = useState()
  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <div className='favClick'>
      <div
        id='favorite'
        className={isFavorite ? 'isFavorite' : 'notFavorite'}
        onClick={handleClickFavorite}
      />
    </div>
  )
}
export default Favorite
