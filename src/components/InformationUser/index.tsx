import styles from "./InformationUser.module.css";
import HeaderMainPage from "../HeaderMainPage/HeaderMainPage";
import { useAppSelector } from "../../hooks/redux";

export default function InformationUser() {
  const { username } = useAppSelector((state) => state.user);
  const { roles } = useAppSelector((state) => state.user);
  const firstLetterUserName =
    username !== null && username.length > 0 ? username[0] : "";
  // const stringRoles = roles.join(", ") !== null && roles.join(", ") > 0 ? roles.join(", ") : "";
  const stringRoles =
    roles !== null && roles.length > 0 ? roles.join(", ") : "";
  return (
    <div>
      <div style={{ position: "relative" }}>
        <HeaderMainPage />
      </div>
      <div style={{ height: "80px" }}></div>
      <div className={styles.background}>
        <div className={styles.cardUser}>
          <div className={styles.logo}>{firstLetterUserName}</div>

          <div className={styles.userName}>{username}</div>
          <div className={styles.roles}>Roles: {stringRoles}</div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
