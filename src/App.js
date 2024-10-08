import React, { Suspense, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import About from "./Components/About";
import userContext from "./utils/userContext";
import appStore from "./utils/appStore";
//React Element

import Header from "./Components/Header";
import Body from "./Components/Body";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import Menu from "./Components/Menu";
import { Provider } from "react-redux";
import Cart from "./Components/Cart";

//React Component
const AboutComponent = React.lazy(() => import("./Components/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState("Vish");
  return (
    <div className="appLayout">
      <Provider store={appStore}>
      <userContext.Provider value={{ loginUser: userName, setUserName }}>
        <Header />
        <Outlet />
      </userContext.Provider>
      </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<div>Please Wait...</div>}>
            <AboutComponent />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <Menu />,
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={<div>Please Wait...</div>}>
        <AboutComponent />
      </Suspense>
    ),
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
