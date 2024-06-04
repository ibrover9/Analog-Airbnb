import styles from "./AddHousing.module.css";
import HeaderMainPage from "../HeaderMainPage/HeaderMainPage";
import { useState } from "react";

export default function AddHousing() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handlePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  return (
    <div>
      <div style={{ position: "relative" }}>
        <HeaderMainPage />
      </div>
      <div style={{ height: "220px" }}></div>

      <div className={styles.background}>
        <div className={styles.cardUser}>
          <div className={styles.fieldHolder}>
            <input
              id="loginRegistration"
              type="text"
              className={styles.inputAuthorization}
              style={{ marginTop: "1.5em", borderRadius: "5px 5px 5px 5px" }}
              onChange={(event) => handleEmail(event)}
              value={email}
              required
            />
          </div>

          <div className={styles.fieldHolder}>
            <input
              id="loginRegistration"
              type="text"
              className={styles.inputAuthorization}
              style={{ marginTop: "1.5em", borderRadius: "5px 5px 5px 5px" }}
              onChange={(event) => handleEmail(event)}
              value={email}
              required
            />
          </div>
          <div className={styles.fieldHolder}>
            <input
              id="loginRegistration"
              type="text"
              className={styles.inputAuthorization}
              style={{ marginTop: "1.5em", borderRadius: "5px 5px 5px 5px" }}
              onChange={(event) => handleEmail(event)}
              value={email}
              required
            />
          </div>
          <div className={styles.fieldHolder}>
            <input
              id="loginRegistration"
              type="text"
              className={styles.inputAuthorization}
              style={{ marginTop: "1.5em", borderRadius: "5px 5px 5px 5px" }}
              onChange={(event) => handleEmail(event)}
              value={email}
              required
            />
          </div>
          <div className={styles.fieldHolder}>
            <input
              id="loginRegistration"
              type="text"
              className={styles.inputAuthorization}
              style={{ marginTop: "1.5em", borderRadius: "5px 5px 5px 5px" }}
              onChange={(event) => handleEmail(event)}
              value={email}
              required
            />
          </div>
          <div className={styles.fieldHolder}>
            <input
              id="loginRegistration"
              type="text"
              className={styles.inputAuthorization}
              style={{ marginTop: "1.5em", borderRadius: "5px 5px 5px 5px" }}
              onChange={(event) => handleEmail(event)}
              value={email}
              required
            />
          </div>
          <div className={styles.fieldHolder}>
            <input
              id="loginRegistration"
              type="text"
              className={styles.inputAuthorization}
              style={{ marginTop: "1.5em", borderRadius: "5px 5px 5px 5px" }}
              onChange={(event) => handleEmail(event)}
              value={email}
              required
            />
          </div>
          <div className={styles.fieldHolder}>
            <input
              id="loginRegistration"
              type="text"
              className={styles.inputAuthorization}
              style={{ marginTop: "1.5em", borderRadius: "5px 5px 5px 5px" }}
              onChange={(event) => handleEmail(event)}
              value={email}
              required
            />
          </div>

          <div className={styles.fieldHolder}>
            <input
              id="loginRegistration"
              type="text"
              className={styles.inputAuthorization}
              style={{ marginTop: "1.5em", borderRadius: "5px 5px 5px 5px" }}
              onChange={(event) => handleEmail(event)}
              value={email}
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
}
