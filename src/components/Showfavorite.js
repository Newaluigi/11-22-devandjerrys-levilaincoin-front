import "./ShowFavorite.scss"
import FavoriteShowFavorite from "./FavoriteShowFavorite";
import DisplayVilainServicePage from "./DisplayVilainServicePage";

const ShowFavorite = props => {

    // recup info local storage


    return (

        <div className="favDisplay">
            <DisplayVilainServicePage vilainInfo1={props.vilainInfo1} />
            <div className="heart">
            <FavoriteShowFavorite isFavorite={props.isFavorite} changeIsFavorite={props.changeIsFavorite} />
            </div>
            {/* {console.log(tab)} */}
        </div>
    )
}
export default ShowFavorite;