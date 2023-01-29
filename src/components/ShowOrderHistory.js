import Rating from "./Rating";
const ShowOrderHistory = (props) => {
    const { histoRating, histoName, histoPrice, histoPicture, histoDate } = props
    return (

        <div className="orders">
            <img className="histoPicture" src={histoPicture} alt={histoName} />
            <div className="histoText">
                
                <p className="orderId">Nom:{histoName}</p>
                <div className="histoStar">      
                <Rating star={histoRating} />
                </div>
                <p className="orderId">Date: {histoDate}</p>
                <p className="orderId">Prix: {histoPrice}</p>
                
            </div>
        </div>

    )
}


export default ShowOrderHistory;