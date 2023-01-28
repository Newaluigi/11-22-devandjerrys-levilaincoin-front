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
            {/* <FavoriteShowFavorite isFavorite={props.userFavorite} changeIsFavorite={props.changeIsFavorite} /> */}
            <FavoriteShowFavorite isFavorite={isFavorite} changeIsFavorite={event => setIsFavorite(event)} 
            // changeFavorite={event => setChangeFavorite(event)}
            />
            </div>
            {console.log(props.userFavorite )}
        </div>
    )
}
export default ShowFavorite;

// changeIsFavorite={event => setIsFavorite(event)}