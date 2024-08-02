import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About";

//React Element


import Header from "./Components/Header";
import Body from "./Components/Body";


//React Component
const AppLayout = ()=>(<div className="appLayout">
    <Header/>
    <Body/>
    </div>);

const appRouter = createBrowserRouter([
    {   
        path:"/",
        element:<AppLayout/>
    },
    {   
        path:"/about",
        element:<About/>
    }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);