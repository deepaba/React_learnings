import colors from "tailwindcss/colors";
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
export const PromotedRestaurant = (RestaurantCard)=>{
    return (props)=>{
return (
    <div >
        <label className="bg-black text-white p-1 m-1 rounded-md absolute">High Rated</label>
        <RestaurantCard {...props}/>
    </div>
)

    }
}
export default RestaurantCard;