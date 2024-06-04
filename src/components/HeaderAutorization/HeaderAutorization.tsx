import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "../HeaderAutorization/HeaderAutorization.module.css";

export default function HeaderAutorization({
  setModalWindowRegistration,
}: {
  setModalWindowRegistration: () => void;
}) {
  return (
    <>
      <div style={{ display: "flex", fontSize: "16px" }}>
        <button onClick={setModalWindowRegistration}>
          <FontAwesomeIcon className={styles.icon} icon={faTimes} size="lg" />
        </button>
        <div className={styles.text}>Login or register</div>
      </div>
      <hr />
    </>
  );
}
