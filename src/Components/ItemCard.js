import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";

const ItemCard = (props) => {
  const { itemsInfo } = props;
  const dispatch = useDispatch();
  const handleAdd=(prop)=>{
    dispatch(addItems(prop));
  }
  return (
    <div>
      {itemsInfo.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 shadow-lg border-gray-500 text-left flex"
        >
          <div className="w-9/12 mr-4">
            <div className="py-2 text-lg">
              <span>{item.card.info.name}</span>
              <span>
                - Rs.
                {(item.card.info.price || item.card.info.defaultPrice) / 100}
              </span>
            </div>
            <p className="text-sm text-slate-500">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12 p-4">
          <div className="absolute">
            <button className="p-2 mx-12 rounded-md bg-black text-white" onClick={()=>handleAdd(item)}>Add+</button>
          </div>
          <div>
            <img src={CDN_URL+item.card.info.imageId} className="w-full"></img>
            </div>
            </div>
        </div>
      ))}
    </div>
  );
};
export default ItemCard;
