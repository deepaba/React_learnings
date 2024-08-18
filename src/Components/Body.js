import { useEffect, useState } from "react";
import restrarants from "../RestroData.json";
import RestaurantCard,{PromotedRestaurant} from "./RestaurantCard";
import { Link } from "react-router-dom";
import { RESTAURANT_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //local State Variable -  powerful variable from react
  const [restros, setRes] = useState([]);
  const [filterRestro, setFIlterRestro] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantPromoted = PromotedRestaurant(RestaurantCard);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const data = await fetch(RESTAURANT_API);
      const json = await data.json();

      setRes(
        json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFIlterRestro(
        json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (e) {
      setRes(restrarants.restaurant);
      setFIlterRestro(restrarants.restaurant);
    }
  };
  const isOnline = useOnlineStatus();
  if (!isOnline)
    return (
      <div>
        <h1>Oops!! Looks like you are offline!!</h1>
      </div>
    );

  if (restros.length == 0)
    return (
      <div>
        <h1>Loading......</h1>
      </div>
    );
  return (
    <div className="p-1 m-1 border border-slate-300 bg-slate-50 shadow-lg">
      <div className="flex p-1 m-1 bg-slate-100">
        <div className="p-1 m-1">
          <input
            className="p-1 m-1 border border-black"
            value={searchText}
            onChange={(evnt) => setSearchText(evnt.target.value)}
          ></input>
          <button
            className="p-1 m-1 bg-sky-400  rounded-sm"
            onClick={() => {
              setFIlterRestro(
                restros.filter((res) =>
                  res.info.name.toUpperCase().includes(searchText.toUpperCase())
                )
              );
            }}
          >
            Search
          </button>
          <button
            className="p-1 m-1 bg-sky-400  rounded-sm"
            onClick={() => {
              setFIlterRestro(
                restros.filter((res) => res.info.avgRating > 4.3)
              );
            }}
          >
            Top rated restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filterRestro.map((restro) => (
          <Link
            className="p-1 m-1 w-64 hover:cursor-pointer hover:border hover:border-black"
            to={"/restaurants/" + restro.info.id}
            key={restro.info.id}
          >
            {
                restro.info.avgRating>4.3?<RestaurantPromoted restrObj={restro.info} />:<RestaurantCard restrObj={restro.info} />
            }
            
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
