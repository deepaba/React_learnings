
import { useParams } from "react-router-dom";
import useMenuData from "../utils/useMenuData";
import { IoIosArrowDropright } from "react-icons/io";

const Menu=()=>{
    const {resId}=useParams();
/*  const [resInfo,setResMenu] = useState(null);
  const [menudata,setMenuData] = useState(null);
  useEffect(()=>{ 
    fetchData();
},[]);
    const fetchData  =  async ()=>{
        const allData =  await fetch(MENU_API+resId);
        const json =  await allData.json();
   
          setResMenu(json.data?.cards[2]?.card?.card?.info);
          setMenuData(json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
          

    };  */ 
     const data = useMenuData(resId);

    const test = data?.cards[2]?.card?.card?.info;
    const testMenu= data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
 
    if(test==null||testMenu===null)
        return <div className="loader"></div>
  
    const {name,locality,costForTwoMessage,cuisines} = test;
    return(<div className="p-1 mx-[30%] absolute">
       <div className=" my-1 border border-slate-300 shadow-md">
         <div className="text-pretty text-lg font-semibold"><h1>{name}</h1></div>
        <div className="text-slate-500"><p>{locality}</p></div>
        <div className="text-slate-500"><p>{cuisines.join(', ')} - {costForTwoMessage}</p></div>
        </div>
        <div className="my-1 border border-slate-300 shadow-md "><h2 className="text-lg">Menu</h2>
        <ul >{testMenu.map((item)=><div className=" my-1 p-1 text-wrap" key={item.card.info.id}><li><h3>{item.card.info.name} - {'Rs.'+(item.card.info.price/100||item.card.info.defaultPrice/100)}</h3></li>
        <p className="text-slate-500">{item.card.info.description}</p></div>)}</ul></div>
    </div>);
   
}
    export default Menu;
