import { logDOM } from '@testing-library/react';
import React, {useState} from 'react'

function FavoriteShowFavorite(props) {

const changeFavStatus = () =>{
  console.log("change")
  props.changeFavoriteStatus(!props.changeFavorite)
}


  return (
    <div className='favClick'>
       
      <div
        id='favorite'
        className={props.isFavorite ? 'isFavorite' : 'notFavorite'}
        onClick={(e)=>{
          props.changeIsFavorite(!props.isFavorite)
          changeFavStatus()
        }}
              />
    </div>
  )
}
export default FavoriteShowFavorite;