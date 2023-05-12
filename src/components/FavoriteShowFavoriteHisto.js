import { logDOM } from '@testing-library/react';
import React, { useState, useEffect } from 'react'

function FavoriteShowFavorite(props) {

  const [tabHistorics, setTabHistorics] = useState([])
  const [displayed, setDisplayed] = useState(props.vilainInfo1)

  useEffect(() => {
    const tabHistorics = JSON.parse(localStorage.getItem('histo'));
    setTabHistorics(tabHistorics);
  }, [!props.vilainInfo1])
// }, [!props.changeFavorite])
  const changeFavStatus = () => {

    displayed.favorite = (!props.changeFavorite);
// console.log(props.vilainInfo1);
    tabHistorics.map((tabHisto) => { tabHisto.id === displayed.id ? tabHisto.favorite = displayed.favorite : null })

    localStorage.setItem('histo', JSON.stringify(tabHistorics));

    // tabHistos[0].favorite = (!props.changeFavorite);
    // console.log(props.vilainInfo1);
    props.changeFavoriteStatus(!props.isFavorite);
    console.log(props.changeFavoriteStatus());
  }


  return (
    <div className='favClick'>
      {/* {console.log(props.isFavorite)} */}
      <div
        id='favorite'
        className={props.isFavorite ? 'isFavorite' : 'notFavorite'}
        onClick={(e) => {
          // bouton
          props.changeIsFavorite(!props.isFavorite)
          // console.log(props.isFavorite)
          // changement data
          changeFavStatus()
        }}
      />
    </div>
  )
}
export default FavoriteShowFavorite;