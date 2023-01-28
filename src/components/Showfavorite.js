import React, { useState, useEffect } from 'react'

import "./ShowFavorite.scss"
import FavoriteShowFavorite from "./FavoriteShowFavorite";
import DisplayVilainServicePage from "./DisplayVilainServicePage";

const ShowFavorite = props => {

    // recup info local storage
    const [isFavorite, setIsFavorite] = useState("isFavorite")

    return (

        <div className="favDisplay">
            <DisplayVilainServicePage vilainInfo1={props.vilainInfo1} />
            <div className="heart">
                <FavoriteShowFavorite
                    isFavorite={isFavorite}
                    changeIsFavorite={event => setIsFavorite(event)}
                    changeFavorite={props.changeFavorite}
                    changeFavoriteStatus={props.changeFavoriteStatus}
                    vilainInfo1={props.vilainInfo1}
                />
            </div>
            {/* {console.log(props.userFavorite )} */}
        </div>
    )
}
export default ShowFavorite;

// changeIsFavorite={event => setIsFavorite(event)}