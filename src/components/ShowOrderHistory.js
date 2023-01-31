import Rating from "./Rating";
import FavoriteShowFavoriteHisto from "./FavoriteShowFavoriteHisto";
import React, { useState, useEffect} from 'react';
import { Link } from "react-router-dom";


const ShowOrderHistory = (props) => {





    const { histoRating, histoName, histoPrice, histoPicture, histoDate, changeFavorite, changeFavoriteStatus, vilainInfo1 } = props
    const [isFavorite, setIsFavorite] = useState(vilainInfo1.favorite)
    const idVilain = vilainInfo1.id

    useEffect(() => {
        setIsFavorite(vilainInfo1.favorite)
        console.log("vilainInfo1fav change");
    }, [vilainInfo1])


    return (

        <div className="orders">
            <img className="histoPicture" src={histoPicture} alt={histoName} />
            <div className="histoText">
            <Link className="linkVilain" to={`/profile/id/${idVilain}`}>
                {/* {console.log(vilainInfo1.favorite)} */}
                <p className="orderId vilainName">{histoName}</p>
                <div className="histoStar">
                    <Rating star={histoRating} />
                </div>
                <p className="orderId">Date: {histoDate}</p>
                <p className="orderId">Prix: {histoPrice}</p>
            </Link>
                <div className="heart">
                    
                    <FavoriteShowFavoriteHisto

                        // couleur du bouton
                        isFavorite={isFavorite}
                        changeIsFavorite={event => setIsFavorite(event)}

                        // agit sur la state de reload page précédente
                        changeFavorite={changeFavorite}
                        changeFavoriteStatus={changeFavoriteStatus}
                        vilainInfo1={vilainInfo1}
                    />
                </div>
            </div>
        </div>

    )
}


export default ShowOrderHistory;