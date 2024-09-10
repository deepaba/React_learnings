import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems, removeItems } from "../utils/cartSlice";

const ItemCard = ({ itemsInfo, cartPage }) => {

  const dispatch = useDispatch();
  const handleAdd = (prop) => {
    dispatch(addItems(prop));
  };
  const handleRemove=(prop)=>{
dispatch(removeItems(prop));
  }
  return (
    <div>
      {itemsInfo.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 shadow-lg border-gray-400 text-left flex"
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
              {!cartPage && (
                <button
                  className="p-2 mx-12 rounded-md bg-black text-white hover:border hover:border-white"
                  onClick={() => handleAdd(item)}
                >
                  Add+
                </button>
              )}
              {cartPage && (
                <div className="p-1 mx-10 rounded-md bg-black text-white hover:border hover:border-white">
                  <button className="p-1 m-1" onClick={() => handleAdd(item)}>
                    +
                  </button>
                  <button>{item.card.info.counter || 1}</button>
                  <button className="p-1 m-1" onClick={() => handleRemove(item)}>-</button>
                </div>
              )}
            </div>
            <div>
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-full"
              ></img>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemCard;
