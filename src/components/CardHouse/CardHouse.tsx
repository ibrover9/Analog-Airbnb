import { useAppSelector } from "../../hooks/redux";
import { CardsHousing } from "../../models/Cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styles from "./CardHouse.module.css";
import { IMAGE } from "../../constants/constants";

const CardHouse: React.FC<CardsHousing> = ({
  id,
  name,
  description,
  stars,
  pricePerDay,
  imageUrl,
}) => {
  console.log(id);
  console.log(description);
  console.log(stars);
  console.log(IMAGE.START);

  return (
    <div className={styles.CardHouse}>
      <Link to={`/information/${id}`}>
        <div className={styles.imgHouse}>
          <img
            className={styles.imgHouse}
            src={`${IMAGE.START}${imageUrl}`}
            alt=""
          />
        </div>
      </Link>
      <div className={styles.firstString}>
        <Link to={`/information/${id}`} className="Link">
          <div className={styles.name}>{name}</div>
        </Link>
        <div className={styles.stars}>
          {stars} <FontAwesomeIcon icon={faStar} className={styles.star} />
        </div>{" "}
        {/* Возможно, здесь вы хотели использовать значение из props */}
      </div>
      <Link to={`/information/${id}`} className="Link">
        <div className={styles.secondString}>
          <div className={styles.price}>${pricePerDay}</div>{" "}
          {/* Вывод цены из props */}
        </div>
      </Link>
    </div>
  );
};

export default CardHouse;
