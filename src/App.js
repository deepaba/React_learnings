import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
import About from "./Components/About";

//React Element


import Header from "./Components/Header";
import Body from "./Components/Body";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import Menu from "./Components/Menu";

//React Component
const AppLayout = ()=>(<div className="appLayout">
    <Header/>
    <Outlet/>
    </div>);

const appRouter = createBrowserRouter([
    {   
        path:"/",
        element:<AppLayout/>,
        children:[
         {   
                path:"/",
                element:<Body/>
        },
        {   
            path:"/about",
            element:<About/>
        },
        {   
            path:"/contact",
            element:<Contact/>
        },
        {
            path:"/restaurants/:resId",
            element:<Menu/>
        }
],
        errorElement:<Error/>
    },
    {   
        path:"/about",
        element:<About/>
    }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);