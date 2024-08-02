import { useEffect, useState } from "react";
import restrarants from "../RestroData.json";
import RestaurantCard from "./RestaurantCard";

const Body = ()=>{
    //local State Variable -  powerful variable from react
    const [restros,setRes]= useState([]);
    const [filterRestro,setFIlterRestro]= useState([]);
    const [searchText,setSearchText]=useState("");
    useEffect(()=>{
        getData();
        },[]);
        const getData=async ()=>{
            try{
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9148603&lng=77.5206395&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            
            setRes(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFIlterRestro(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            } catch(e){
            setRes(restrarants.restaurant);
            setFIlterRestro(restrarants.restaurant);
            }
        }
        if(restros.length==0)
           return <div className="loader"></div>
    return(
        <div className="body">
            <div className="filter">
                <div className="searchDiv">
                    <input className="search" value={searchText} 
                    onChange={(evnt)=>setSearchText(evnt.target.value)}></input>
                    <button className="searchBtn"
                    onClick={()=>{
                        setFIlterRestro(restros.filter(res=>res.info.name.toUpperCase().includes(searchText.toUpperCase())));
                    }}>Search</button></div>
                <button className="filter-btn" onClick={()=>{ 
                  setFIlterRestro( restros.filter(res=>res.info.avgRating>4.3));
                    
                }}>Top rated restaurants</button>
            </div>
            <div className="res-container">
                {filterRestro.map((restro)=><RestaurantCard key={restro.info.id} restrObj={restro.info} />)}
            
            </div>
            
        </div>
    );
}
export default Body;