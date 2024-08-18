import { useParams } from "react-router-dom";
import useMenuData from "../utils/useMenuData";
import MenuCard from "./MenuCard";

const Menu = () => {
  const { resId } = useParams();
  // const [categories, setCategories] = useState(null);
  const data = useMenuData(resId);

  const test = data?.cards[2]?.card?.card?.info;
  const menu = data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  if (test == null || menu == null) return <div className="loader"></div>;

  const categories = menu.filter(
    (category) =>
      category.card.card["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  
  const { name, locality, costForTwoMessage, cuisines } = test;
  return (
    <div className="p-1 text-center">
      <h1 className="text-lg font-bold">{name}</h1>
        <p className= "text-slate-500">{locality}</p>

      <p className="text-slate-500">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {categories.map((cat) => (
        <MenuCard menuInfo={cat.card.card} key={cat.card.card.title}/>
      ))}
      </div>
    
  );
};
export default Menu;
