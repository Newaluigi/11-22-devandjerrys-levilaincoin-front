import { logDOM } from '@testing-library/react';
import React, { useState, useEffect } from 'react'

function FavoriteShowFavorite(props) {

  const [tabHistorics, setTabHistorics] = useState([])
  const [displayed, setDisplayed] = useState(props.vilainInfo1)

  useEffect(() => {
    const tabHistorics = JSON.parse(localStorage.getItem('histo'));
    setTabHistorics(tabHistorics);
  }, [!props.changeFavorite])

  const changeFavStatus = () => {
    // Here's the change of the favorite status in the imported database tabHistorics
    // at first, change the fav status in vilainInfo1 which is the component character
    displayed.favorite = (!props.changeFavorite);

    console.log(props.vilainInfo1);
    // Now change THIS character fav status in the main state database "tabHistorics" using .map
    tabHistorics.map((tabHisto) => { tabHisto.id === displayed.id ? tabHisto.favorite = displayed.favorite : null })

    // Now overwriting of the "tabHistorics" localstorage
    localStorage.setItem('histo', JSON.stringify(tabHistorics));

    // tabHistos[0].favorite = (!props.changeFavorite);
    // console.log(props.vilainInfo1);
    props.changeFavoriteStatus(!props.changeFavorite);
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