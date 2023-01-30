import Rating from "./Rating";
import FavoriteShowFavoriteHisto from "./FavoriteShowFavoriteHisto";
import React, { useState, useEffect} from 'react'


const ShowOrderHistory = (props) => {





    const { histoRating, histoName, histoPrice, histoPicture, histoDate, changeFavorite, changeFavoriteStatus, userHisto } = props
    const [isFavorite, setIsFavorite] = useState(userHisto.favorite)

    useEffect(() => {
        setIsFavorite(userHisto.favorite)
        console.log("userHistofav change");
    }, [userHisto])


    return (

        <div className="orders">
            <img className="histoPicture" src={histoPicture} alt={histoName} />
            <div className="histoText">
                {/* {console.log(userHisto.favorite)} */}
                <p className="orderId">Nom:{histoName}</p>
                <div className="histoStar">
                    <Rating star={histoRating} />
                </div>
                <p className="orderId">Date: {histoDate}</p>
                <p className="orderId">Prix: {histoPrice}</p>
                <div className="heart">
                    <FavoriteShowFavoriteHisto
                        // couleur du bouton
                        isFavorite={isFavorite}
                        changeIsFavorite={event => setIsFavorite(event)}
                        // agit sur la state de reload page précédente
                        changeFavorite={changeFavorite}
                        changeFavoriteStatus={changeFavoriteStatus}
                        vilainInfo1={userHisto}
                        userHisto={userHisto}
                    />
                </div>
            </div>
        </div>

    )
}


export default ShowOrderHistory;