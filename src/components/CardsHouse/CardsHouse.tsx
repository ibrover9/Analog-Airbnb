import CardHouse from "../CardHouse/CardHouse";
import styles from "../CardsHouse/CardsHouse.module.css";
import { useAppSelector } from "../../hooks/redux";

export default function CardsHouse() {
  const { housing } = useAppSelector((state) => state.cards);
  console.log(housing);
  return (
    <div className={styles.CardsHouse}>
      {housing.map((element) => (
        <CardHouse
          key={element.id}
          id={element.id}
          name={element.name}
          description={element.description}
          stars={element.stars}
          pricePerDay={element.pricePerDay}
          imageUrl={element.imageUrl}
        />
      ))}{" "}
    </div>
  );
}
