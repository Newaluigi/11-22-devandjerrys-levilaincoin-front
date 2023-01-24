import "./ShowFavorite.scss"
import FavoriteShowFavorite from "./FavoriteShowFavorite";
import DisplayVilainServicePage from "./DisplayVilainServicePage";

const ShowFavorite =props=>{
  
    // recup info local storage
    
  
    return(
        
        <div className="yy">
            <DisplayVilainServicePage vilainInfo1={props.vilainInfo1}/>
            <FavoriteShowFavorite isFavorite={props.isFavorite} changeIsFavorite={props.changeIsFavorite}/> 
            {/* {console.log(tab)} */}
        </div>
    )
}
export default ShowFavorite;