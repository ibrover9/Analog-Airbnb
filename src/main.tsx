import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { setupStore } from "./store/store.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import MovieInformationCard from "./components/MovieInformationCard/index.tsx";
import InformationUser from "./components/InformationUser/index.tsx";
import History from "./components/History/index.tsx";
import AddHouse from "./components/AddHousing/index.tsx";

const store = setupStore();

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/information/:idHouse" element={<MovieInformationCard />} />
      <Route path="/user" element={<InformationUser />} />
      <Route path="/history" element={<History />} />
      <Route path="/addHouse" element={<AddHouse />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
