//React Element
import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header =()=> {
    const[btnLogin,setBtonLogin]=useState("Login");
    const user = useContext(userContext);
   const cartItems = useSelector((store)=>store.cart.items);
    return (
    <div className="flex p-1 m-1 justify-between border border-slate-300 bg-slate-50 shadow-lg">
        <div className="w-32">
            <img src={LOGO_URL} className="logoImage"></img>
        </div>
        <div className="flex p-1 m-1">
            <ul className="flex list-none items-center font-semibold text-lg">
                <li><Link className="p-1 m-1" to="/">Home</Link></li>
                <li><Link className="p-1 m-1" to="/about">About Us</Link></li>
                <li><Link className="p-1 m-1" to="/contact">Contact</Link></li>
                <li><Link className="p-1 m-1" to="/cart">Cart({cartItems.length} items)</Link></li>
                <li><button className = "p-1 m-1 border border-black shadow-xl" onClick={()=>{
                    btnLogin==="Login"?setBtonLogin(user.loginUser):setBtonLogin("Login");
                }}>{btnLogin}</button></li>
                <li className="p-1 m-1">{user?.loginUser}</li>
            </ul>
        </div>
    </div>
);
};
export default Header;