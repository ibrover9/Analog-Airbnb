import { useEffect } from "react";
import HeaderMainPage from "../HeaderMainPage/HeaderMainPage";
import styles from "../MainWindow/MainWindow.module.css";
import SearchFilter from "../SearchFilter/SearchFilter";
import CardsHouse from "../CardsHouse/CardsHouse";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import { fetchUserInformation } from "../../store/reducers/ActionGetInformationUser";
import { fetchCardsHousing } from "../../store/reducers/ActionGetCardsHouse";
import { fetchUserHistory } from "../../store/reducers/ActionGetHistoryReservationHotel";

export default function MainWindow() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUserInformation());
    dispatch(fetchCardsHousing());
    dispatch(fetchUserHistory());
  }, []);

  return (
    <div>
      <div style={{ position: "relative" }}>
        <HeaderMainPage />
      </div>
      <div style={{ height: "80px" }}></div>
      <SearchFilter />
      <hr />
      <CardsHouse />
    </div>
  );
}
