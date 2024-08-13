import { useState,useEffect} from "react";
import { MENU_API } from "./constants";
  const useMenuData =  (resId)=>{

    const [resMenu,setResMenu] = useState(null);
  
    const fetchData  =  async ()=>{
        const allData =  await fetch(MENU_API+resId);
        const json =  await allData.json();
          setResMenu(json.data);
    }; 
    useEffect(()=>{ fetchData();},[]);

    return resMenu;

}

export default useMenuData;