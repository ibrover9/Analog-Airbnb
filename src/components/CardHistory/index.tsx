import styles from "./CardHistory.module.css";
import { Reservation } from "../../models/IUser";
import { useEffect, useState } from "react";
import { getAllMovieInformationCard } from "../functions/getAllInformationHotel";
import { MovieInformationHousing } from "../../models/MovieInformationCard";

const CardHistory: React.FC<Reservation> = ({ id, hotelId, from, to }) => {
  const [allInformationCard, setAllInformationCard] = useState<
    MovieInformationHousing | null | undefined
  >(null);
  useEffect(() => {
    const fetchData = async () => {
      const element = await getAllMovieInformationCard(hotelId);
      setAllInformationCard(element);
    };

    fetchData();
  }, [hotelId]);
  return (
    <>
      {allInformationCard && (
        <div className={styles.CardHistory}>
          <div className={styles.hotelId}>{` ${allInformationCard.name} `}</div>
          <div className={styles.reservationDates}>{`${from}___${to}`}</div>
        </div>
      )}
    </>
  );
};

export default CardHistory;
