import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
const Menu=()=>{
    let {resId}=useParams();
    const [resInfo,setResInfo]=useState(null);
    const [menudata,setMenu]=useState(null);

    useEffect(()=>{
        getData();
    },[]);

    const getData=async ()=>{
    const resData = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9148603&lng=77.5206395&restaurantId="+resId);
    const json = await resData.json();
    
    const {info} = json.data.cards[2].card.card;
    const {itemCards} = json.data.cards[4].groupedCard.cardGroupMap.REGULAR?.cards[2]?.card?.card;
   
    setMenu(itemCards);
    setResInfo(info);
    }
    if(resInfo===null||menudata===null){
        return <div className="loader"></div>;
    }
    const {name,locality,costForTwoMessage,cuisines} = resInfo;
    return(<div className="resInfoClass">
       <div className="mainInfo">
         <div><h1>{name}</h1></div>
        <div><p>{locality}</p></div>
        <div><p>{cuisines.join(', ')} - {costForTwoMessage}</p></div>
        </div>
        <div className="menuInfo"><h2>Menu</h2>
        <ul>{menudata.map((item)=><div className="menuItem"><li><h3>{item.card.info.name} - {'Rs.'+(item.card.info.price/100||item.card.info.defaultPrice/100)}</h3></li>
        <p>{item.card.info.description}</p></div>)}</ul></div>
    </div>);
    }
   
    export default Menu;