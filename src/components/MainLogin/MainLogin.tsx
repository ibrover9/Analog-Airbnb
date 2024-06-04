import { useState } from "react";
import styles from "../MainLogin/MainLogin.module.css";
import React from "react";
import { useAppDispatch } from "../../hooks/redux";
import { fetchUserInformation } from "../../store/reducers/ActionGetInformationUser";

export default function MainLogin({
  setModalWindowRegistration,
}: {
  setModalWindowRegistration: () => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [ativateLogin, setActivateLogin] = useState(false);
  const dispatch = useAppDispatch();

  function handleEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handlePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  async function postLogin(email: string, password: string) {
    try {
      const options: RequestInit = {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        credentials: "include", // Включает передачу куки
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      };
      await fetch("http://localhost:8000/api/v1/user/login", options);
    } catch (error) {
      alert(error);
    }

    setModalWindowRegistration();
    dispatch(fetchUserInformation());
    // setActivateLogin(true);
  }
  // useEffect(() => {
  //   dispatch(fetchUserInformation());
  // }, [ativateLogin]);

  return (
    <div>
      <div className={styles.welcome}>Welcome to Airbnb</div>
      <div className={styles.fieldHolder}>
        <input
          id="loginRegistration"
          type="text"
          className={styles.inputAuthorization}
          style={{ marginTop: "1.5em", borderRadius: "5px 5px 0 0" }}
          onChange={(event) => handleEmail(event)}
          value={email}
          required
        />
        <label className={styles.labelFirst} htmlFor="loginRegistration">
          Email
        </label>
      </div>
      <div className={styles.fieldHolder}>
        <input
          id="passwordRegistration"
          type="password"
          className={styles.inputAuthorization}
          style={{ borderRadius: "0 0 5px 5px" }}
          onChange={(event) => handlePassword(event)}
          value={password}
          required
        />
        <label className={styles.labelSecond} htmlFor="passwordRegistration">
          Password
        </label>
      </div>
      <p className={styles.privacyPolicy}>
        We will call you or send you an SMS to confirm your phone number. Your
        standard messaging and data rates apply. <b>Privacy Policy</b>
      </p>
      <button
        className={styles.buttonContinue}
        onClick={() => postLogin(email, password)}
      >
        Сontinue
      </button>
    </div>
  );
}
