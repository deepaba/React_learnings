import React, { Suspense, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import About from "./Components/About";
import userContext from "./utils/userContext";
//React Element

import Header from "./Components/Header";
import Body from "./Components/Body";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import Menu from "./Components/Menu";

//React Component
const AboutComponent = React.lazy(() => import("./Components/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState("Vish");
  return (
    <div className="appLayout">
      <userContext.Provider value={{ loginUser: userName, setUserName }}>
        <Header />
        <Outlet />
      </userContext.Provider>
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
