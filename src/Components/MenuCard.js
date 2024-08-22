import { useState } from "react";
import ItemCard from "./ItemCard";
const MenuCard = (props) => {
  const { menuInfo,showMenu,showItems } = props;
  const handleShowMenu=()=>
  {
    showMenu();
  }
  return (
    <div>
      <div
        className="p-2 mx-auto my-2 w-1/2 shadow-lg flex justify-between border cursor-pointer "
        onClick={handleShowMenu}
      >
        <span className="font-semibold text-lg">{menuInfo.title}</span>
        <span className="text-black">⬇️</span>
      </div>
      {showItems && (
        <div className="p-2 mx-auto my-2 w-1/2 text-left">
          <ItemCard itemsInfo={menuInfo.itemCards} />
        </div>
      )}
    </div>
  );
};

export default MenuCard;
