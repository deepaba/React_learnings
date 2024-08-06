//React Element
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header =()=> {
    const[btnLogin,setBtonLogin]=useState("Login");
    return (
    <div className="header">
        <div className="logo">
            <img src={LOGO_URL} className="logoImage"></img>
        </div>
        <div className="navDiv">
            <ul className="navList">
                <li><Link className="resCardLink" to="/">Home</Link></li>
                <li><Link className="resCardLink" to="/about">About Us</Link></li>
                <li><Link className="resCardLink" to="/contact">Contact</Link></li>
                <li>Cart</li>
                <li><button className = "loginButton" onClick={()=>{
                    btnLogin==="Login"?setBtonLogin("Logout"):setBtonLogin("Login");
                }}>{btnLogin}</button></li>
            </ul>
        </div>
    </div>
);
};
export default Header;