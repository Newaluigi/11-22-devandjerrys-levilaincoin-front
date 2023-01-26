import { logDOM } from '@testing-library/react';
import React, {useState} from 'react'

function FavoriteShowFavorite(props) {




  return (
    <div className='favClick'>
       
      <div
        id='favorite'
        className={props.isFavorite ? 'isFavorite' : 'notFavorite'}
        onClick={(e)=>props.changeIsFavorite(!props.isFavorite)}
              />
    </div>
  )
}
export default FavoriteShowFavorite;