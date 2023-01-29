import React, { useState, useEffect } from 'react'

import "./ShowFavorite.scss"
import FavoriteShowFavorite from "./FavoriteShowFavorite";
import DisplayVilainServicePage from "./DisplayVilainServicePage";

const ShowFavorite = props => {

    // recup info local storage
    const [isFavorite, setIsFavorite] = useState(true)
    
    return (

        <div className="favDisplay">
            <DisplayVilainServicePage vilainInfo1={props.vilainInfo1} />
            <div className="heart">
                <FavoriteShowFavorite

                // couleur du bouton
                    isFavorite={isFavorite}
                    changeIsFavorite={event => setIsFavorite(event)}

                    // agit sur la state de reload page précédente
                    changeFavorite={props.changeFavorite}
                    changeFavoriteStatus={props.changeFavoriteStatus}
                    vilainInfo1={props.vilainInfo1}
                    userHisto={props.userHisto}
                />
            </div>
            {/* {console.log(props.userHisto )} */}
        </div>
    )
}
export default ShowFavorite;

// changeIsFavorite={event => setIsFavorite(event)}