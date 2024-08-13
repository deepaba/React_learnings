import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props)=>{
    const {restrObj}=props;
    const {name,cuisines,avgRating,sla,costForTwo,cloudinaryImageId}=restrObj;
    return(
        
        <div className="overflow-hidden text-wrap font-semibold p-1 m-1 bg-[#fofoff]">
            <img className="w-[100%] h-[40%] object-cover rounded-md" alt="res-logo" src={CDN_URL+cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} Minutes</h4>
        </div>
    );
};
export default RestaurantCard;