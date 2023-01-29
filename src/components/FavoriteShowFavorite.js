import { logDOM } from '@testing-library/react';
import React, {useState} from 'react'

function FavoriteShowFavorite(props) {

const changeFavStatus = () =>{
  // console.log("change")
  props.changeFavoriteStatus(!props.changeFavorite);
  console.log(props.vilainInfo1);
  props.vilainInfo1[2] = (!props.changeFavorite);
  console.log(props.vilainInfo1[2]);
  console.log(props.userHisto[0].id);
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