import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faUserCircle,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../HeaderMainPage/HeaderMainPage.module.css";
import { useState } from "react";
import HeaderAutorization from "../HeaderAutorization/HeaderAutorization";
import MainRegistration from "../MainRegistration/MainRegistration";
import MainLogin from "../MainLogin/MainLogin";
import { motion } from "framer-motion";
import { useAppSelector } from "../../hooks/redux";
import { useAppDispatch } from "../../hooks/redux";
import { fetchUserInformation } from "../../store/reducers/ActionGetInformationUser";
import { fetchResetInformation } from "../../store/reducers/ActionResetInformation";
// import { IUser } from "../../models/IUser";
import { Link } from "react-router-dom";

export default function HeaderMainPage() {
  const [modalWindowUser, setModalWindowUser] = useState<boolean>(false);
  const [modalWindowRegistration, setModalWindowRegistration] =
    useState<boolean>(false);
  const [modalWindowLogin, setModalWindowLogin] = useState<boolean>(false);
  const { anonymous } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const { username } = useAppSelector((state) => state.user);

  // const { RESET_INFORMATION } = userReduce.actions;
  // // const handleOpen = () => {
  //   setModalWindowUser(!modalWindowUser);
  // };

  async function RESET_INFORMATION() {
    try {
      dispatch(fetchResetInformation());
      setModalWindowUser(!modalWindowUser);
      dispatch(fetchUserInformation());
    } catch (error) {
      alert(error);
    }
  }

  function handleModalWindowUser() {
    setModalWindowUser(!modalWindowUser);
  }
  function handleModalWindowLogin() {
    setModalWindowLogin(!modalWindowLogin);
    console.log(2);
  }
  function handleModalWindowRegistration() {
    setModalWindowRegistration(!modalWindowRegistration);
    console.log(3);
  }
  return (
    <>
      <div className={styles.headerMainPage}>
        <Link to="/">
          <img
            src="../public/img/Airbnb-logo.png"
            alt="Логотип компании"
            width="90"
            height="50"
          />
        </Link>

        <div className={styles.centerButtons}>
          <input
            className={`${styles.textCenterButtons}`}
            type="button"
            value="Housing"
          />
          <input
            className={styles.textCenterButtons}
            type="button"
            value="Emotions"
          />
          <input
            className={styles.textCenterButtons}
            type="button"
            value="Online-emotions"
          />
        </div>

        <div style={{ display: "flex" }}>
          <input
            className={styles.rightButtons}
            type="button"
            value="Rent out housing"
          />
          <button className={styles.rightButtons}>
            <FontAwesomeIcon icon={faGlobe} size="lg" />
          </button>

          <button className={styles.buttonUser} onClick={handleModalWindowUser}>
            <FontAwesomeIcon
              icon={faBars}
              className={styles.iconButtonUserLeft}
            />
            <FontAwesomeIcon
              icon={faUserCircle}
              className={styles.iconButtonUserRight}
            />
          </button>
        </div>
      </div>

      {modalWindowUser && (
        <div
          className={styles.backgroundModalWindowUser}
          onClick={handleModalWindowUser}
        >
          <div className={styles.modalWindowUser}>
            {anonymous && (
              <>
                <input
                  className={styles.buttonsInWodalWindow}
                  type="button"
                  value="Register"
                  onClick={handleModalWindowRegistration}
                />
                <input
                  className={styles.buttonsInWodalWindow}
                  type="button"
                  value="Login"
                  onClick={handleModalWindowLogin}
                />
                <hr />
              </>
            )}

            {!anonymous && (
              <>
                <Link to={`/user`} className="Link">
                  <input
                    className={styles.buttonsInWodalWindow}
                    type="button"
                    value={username ?? ""}
                  />
                </Link>
                <hr />
                <Link to={`/addHouse`} className="Link">
                  <input
                    className={styles.buttonsInWodalWindow}
                    type="button"
                    value="Add a home"
                  />
                </Link>
                <Link to={`/history`} className="Link">
                  <input
                    className={styles.buttonsInWodalWindow}
                    type="button"
                    value="History"
                  />
                </Link>
              </>
            )}
            <input
              className={styles.buttonsInWodalWindow}
              type="button"
              value="Rent out housing"
            />
            <input
              className={styles.buttonsInWodalWindow}
              type="button"
              value="Helper"
            />
            {!anonymous && (
              <>
                <hr />
                <Link to="/" className="Link">
                  <input
                    className={styles.buttonsInWodalWindow}
                    type="button"
                    value="Exit"
                    onClick={RESET_INFORMATION}
                  />
                </Link>
              </>
            )}
          </div>
        </div>
      )}
      {modalWindowLogin && (
        <div
          className={styles.backgroundModalWindowAuthorization}
          onClick={handleModalWindowLogin}
        >
          <motion.div
            initial={{ x: "-1000px" }}
            animate={{ x: "0" }}
            transition={{ deplay: "0.5" }}
            className={styles.modalWindowAuthorization}
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <HeaderAutorization
              setModalWindowRegistration={handleModalWindowLogin}
            />
            <MainLogin setModalWindowRegistration={handleModalWindowLogin} />
          </motion.div>
        </div>
      )}
      {modalWindowRegistration && (
        <div
          className={styles.backgroundModalWindowAuthorization}
          onClick={handleModalWindowRegistration}
        >
          <motion.div
            initial={{ x: "-1000px" }}
            animate={{ x: "0" }}
            transition={{ deplay: "0.5" }}
            className={styles.modalWindowAuthorization}
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <HeaderAutorization
              setModalWindowRegistration={handleModalWindowRegistration}
            />
            <MainRegistration
              setModalWindowRegistration={handleModalWindowRegistration}
            />
          </motion.div>
        </div>
      )}
    </>
  );
}
