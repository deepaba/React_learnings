import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props)=>{
    const {restrObj}=props;
    const {name,cuisines,avgRating,sla,costForTwo,cloudinaryImageId}=restrObj;
    return(
        
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={CDN_URL+cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4 className="cuisines">{cuisines.join(', ')}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} Minutes</h4>
        </div>
    );
};
export default RestaurantCard;