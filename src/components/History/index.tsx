import styles from "./History.module.css";
import HeaderMainPage from "../HeaderMainPage/HeaderMainPage";
import CardHistory from "../CardHistory/index.tsx";
import { useAppSelector } from "../../hooks/redux.tsx";

export default function History() {
  const { reservations } = useAppSelector((state) => state.user);
  console.log(reservations?.reservations);
  return (
    <div>
      <div style={{ position: "relative" }}>
        <HeaderMainPage />
      </div>
      <div style={{ height: "80px" }}></div>
      <div className={styles.background}>
        <div className={styles.cardUser}>
          {reservations?.reservations.map((element) => (
            <CardHistory
              key={element.id}
              id={element.id}
              hotelId={element.hotelId}
              from={element.from}
              to={element.to}
            />
          ))}{" "}
        </div>
      </div>
    </div>
  );
}
