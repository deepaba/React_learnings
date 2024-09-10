import { useDispatch, useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const dispatch= useDispatch();
  
  const handleClear=()=>{
    if(confirm("Are you sure???")){dispatch(clearCart())}
    ;
  }
  return (
    <div className="p-1 text-center">
        <div className="flex justify-between p-2 mx-auto w-1/2 border-b-2">
        <span className="p-2 m-2 font-semibold text-2xl">Cart Items</span>
        <button className="p-2 m-2 font-semibold rounded-sm text-lg bg-gray-400 text-black" onClick={handleClear}>Clear Cart</button>
        </div>
      
      <div className="p-2 mx-auto my-2 w-1/2 text-left">
        <ItemCard itemsInfo={items} cartPage={true} />
      </div>
    </div>
  );
};
export default Cart;
