import styles from "../SearchFilter/SearchFilter.module.css";

export default function SearchFilter() {
  return (
    <div>
      <div className={styles.SearchFilter}>
        <div className={styles.filterWhere}>
          <div className={styles.headerFilterWhere}>Where</div>
          <input
            type="text"
            className={styles.inputFilterWhere}
            placeholder="Search for accommodation"
          />
        </div>
        <hr className={styles.verticalLine} />

        <div className={styles.filterArrival}>
          <div className={styles.headerFilterArrival}>Arrival</div>
          <input
            type="text"
            className={styles.inputFilterArrival}
            placeholder="When?"
          />
        </div>
        <hr className={styles.verticalLine} />
        <div className={styles.filterDeparture}>
          <div className={styles.headerFilterDeparture}>Departure</div>
          <input
            type="text"
            className={styles.inputFilterDeparture}
            placeholder="When?"
          />
        </div>
        <hr className={styles.verticalLine} />
        <div className={styles.filterWho}>
          <div className={styles.headerFilterWho}>Who</div>
          <input
            type="text"
            className={styles.inputFilterWho}
            placeholder="Who's going?"
          />
        </div>
      </div>
    </div>
  );
}
