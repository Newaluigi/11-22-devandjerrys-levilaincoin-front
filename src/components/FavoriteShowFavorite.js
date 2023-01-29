import { logDOM } from '@testing-library/react';
import React, {useState, useEffect} from 'react'

function FavoriteShowFavorite(props) {

  const [tabHistos, setTabHistos] = useState([])
  const [displayed, setDisplayed] = useState(props.vilainInfo1)
  useEffect(() => {
    const tabHistos = JSON.parse(localStorage.getItem('histo'));
    setTabHistos(tabHistos);
    // console.log(tabHistos);
    // localStorage.setItem('favorite', [1,3 ,5] ); 
  }, [])

const changeFavStatus = () =>{
  // this line changes the state that trigger the useEffect reload on UserProfilePage
  props.changeFavoriteStatus(!props.changeFavorite);
  // Here's the change of the favorite status in the imported database tabHistos
  // at first change the fav status in vilainInfo1 which is the component character
  displayed.favorite=(!props.changeFavorite);
  // console.log(displayed);
  // Now change THIS character fav status in the main database using .map
  tabHistos.map((tabHisto)=>{tabHisto.id===displayed.id? tabHisto.favorite=displayed.favorite:null})

// tabHistos.map((tabHisto)=>{console.log(tabHisto.id);
//   console.log(displayed.id); })


  // tabHistos[0].favorite = (!props.changeFavorite);
  // console.log(props.vilainInfo1);
  // console.log(props.vilainInfo1[2]);
  // console.log(props.userHisto[0].id);
  // console.log(tabHistos[2]);
  console.log(tabHistos);
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