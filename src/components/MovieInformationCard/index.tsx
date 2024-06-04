import { useParams, Link } from "react-router-dom";
import styles from "./MovieInformationCard.module.css";
import HeaderMainPage from "../HeaderMainPage/HeaderMainPage";
import { MovieInformationHousing } from "../../models/MovieInformationCard";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { IMAGE } from "../../constants/constants";

import {
  faWifi,
  faTelevision,
  faCoffee,
  faPlayCircle,
  faCar,
  faMoneyBill,
  faSnowflake,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function MovieInformationCard() {
  const params = useParams();
  const idHouse = params.idHouse;
  const [allInformationCard, setAllInformationCard] =
    useState<MovieInformationHousing | null>(null);
  const [dateRange, setDateRange] = useState<[string | null, string | null]>([
    null,
    null,
  ]);
  const [startDate, endDate] = dateRange;
  const [blockedRanges, setBlockedRanges] = useState<
    { start: Date; end: Date }[]
  >([]);

  async function getAllMovieInformationCard() {
    try {
      const options: RequestInit = {
        method: "GET",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        credentials: "include", // Включает передачу куки
      };

      const AllInformationHousing = await fetch(
        `http://localhost:8000/api/v1/hotel/${idHouse}`,
        options
      );
      const CardsHousingJson: MovieInformationHousing =
        await AllInformationHousing.json();
      setAllInformationCard(CardsHousingJson);
      if (CardsHousingJson) {
        const newBlockedRanges = CardsHousingJson.reservations.map(
          (reservation) => ({
            start: new Date(reservation.from),
            end: new Date(reservation.to),
          })
        );
        setBlockedRanges(newBlockedRanges);
      }
    } catch (error) {
      alert(error);
    }
  }

  async function postBlockedDate(
    startDate: string | null,
    endDate: string | null,
    idHouse: string | null | undefined
  ) {
    try {
      const options: RequestInit = {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        credentials: "include", // Включает передачу куки
        body: JSON.stringify({
          from: startDate,
          to: endDate,
          hotelId: idHouse,
        }),
      };

      await fetch("http://localhost:8000/api/v1/user/reservations", options);
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    getAllMovieInformationCard();
  }, []);

  const handleDateChangeEntrance = (date: null) => {
    setDateRange([date, endDate]);
  };
  const handleDateChangeDeparture = (date: null) => {
    setDateRange([startDate, date]);
  };
  const isDateBlocked = (date: Date) => {
    // Возвращаем true, если дата не попадает в один из заблокированных диапазонов
    return !blockedRanges.some(
      (range) => date >= range.start && date <= range.end
    );
  };

  function addDateBlocked() {
    postBlockedDate(startDate, endDate, idHouse);
    console.log(startDate);
  }

  console.log(blockedRanges);
  return (
    <>
      {allInformationCard && (
        <div className={styles.movieInformationCard}>
          <div style={{ position: "relative" }}>
            <HeaderMainPage />
          </div>
          <div style={{ height: "80px" }}></div>

          <div className={styles.hr}>
            <hr />
          </div>
          <div className={styles.mainMovieInformationCard}>
            <div className={styles.Header}>
              <div>{allInformationCard.name}</div>
            </div>

            <div className={styles.blockAllImg}>
              <div className={styles.mainImgBlock}>
                <img
                  className={styles.mainImgHouse}
                  src={`${IMAGE.START}${allInformationCard.imageUrl}`}
                  alt=""
                />
              </div>
              <div>
                <div>
                  <img
                    className={styles.imgHouse}
                    src={`${IMAGE.START}${allInformationCard.imageUrl}`}
                    alt=""
                  />
                  <img
                    className={`${styles.imgHouse} ${styles.imgHouseLeftTop}`}
                    src={`${IMAGE.START}${allInformationCard.imageUrl}`}
                    alt=""
                  />
                </div>
                <div>
                  {" "}
                  <img
                    className={styles.imgHouse}
                    src={`${IMAGE.START}${allInformationCard.imageUrl}`}
                    alt=""
                  />
                  <img
                    className={`${styles.imgHouse} ${styles.imgHouseLeftBottom}`}
                    src={`${IMAGE.START}${allInformationCard.imageUrl}`}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className={styles.information}>
              <div className={styles.leftInformation}>
                <div className={styles.addressHouse}>
                  {`${allInformationCard.address.continent}, ${allInformationCard.address.country}, ${allInformationCard.address.city}, ${allInformationCard.address.address}`}
                </div>
                <hr />
                <div className={styles.amenitiesHeader}>
                  What amenities await you
                </div>
                <div className={styles.amenities}>
                  <div className={styles.amenitiesBlock}>
                    <div className={styles.twoAmenitiesBlock}>
                      <div className={styles.oneAmenitiesBlock}>
                        <FontAwesomeIcon
                          className={styles.icon}
                          icon={faWifi}
                          size="lg"
                        />
                        <div
                          className={`${
                            allInformationCard.offers.hasWifi
                              ? ""
                              : styles.lineThrough
                          }`}
                        >
                          Wifi
                        </div>
                      </div>
                      <div className={styles.oneAmenitiesBlock}>
                        <FontAwesomeIcon
                          className={styles.icon}
                          icon={faTelevision}
                          size="lg"
                        />
                        <div
                          className={`${
                            allInformationCard.offers.hasTv
                              ? ""
                              : styles.lineThrough
                          }`}
                        >
                          TV
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.amenitiesBlock}>
                    <div className={styles.twoAmenitiesBlock}>
                      <div
                        className={`${styles.oneAmenitiesBlock} ${
                          allInformationCard.offers.hasKitchen
                            ? ""
                            : styles.lineThrough
                        }`}
                      >
                        <FontAwesomeIcon
                          className={styles.icon}
                          icon={faCoffee}
                          size="lg"
                        />
                        <div>Kitchen</div>
                      </div>

                      <div className={styles.oneAmenitiesBlock}>
                        <FontAwesomeIcon
                          className={styles.icon}
                          icon={faPlayCircle}
                          size="lg"
                        />
                        <div
                          className={`${
                            allInformationCard.offers.hasWasher
                              ? ""
                              : styles.lineThrough
                          }`}
                        >
                          Washing machine
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.amenitiesBlock}>
                    <div className={styles.twoAmenitiesBlock}>
                      <div className={styles.oneAmenitiesBlock}>
                        <FontAwesomeIcon
                          className={styles.icon}
                          icon={faSnowflake}
                          size="lg"
                        />
                        <div
                          className={`${
                            allInformationCard.offers.hasConditioner
                              ? ""
                              : styles.lineThrough
                          }`}
                        >
                          Conditioner
                        </div>
                      </div>
                      <div className={styles.oneAmenitiesBlock}>
                        <FontAwesomeIcon
                          className={styles.icon}
                          icon={faMoneyBill}
                          size="lg"
                        />

                        <div
                          className={`${
                            allInformationCard.offers.hasPaidParking
                              ? ""
                              : styles.lineThrough
                          }`}
                        >
                          PaidParking
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.amenitiesBlock}>
                    <div className={styles.twoAmenitiesBlock}>
                      <div className={styles.oneAmenitiesBlock}>
                        <FontAwesomeIcon
                          className={styles.icon}
                          icon={faCar}
                          size="lg"
                        />
                        <div
                          className={`${
                            allInformationCard.offers.hasFreeParking
                              ? ""
                              : styles.lineThrough
                          }`}
                        >
                          FreeParking
                        </div>
                      </div>
                      <div className={styles.oneAmenitiesBlock}>
                        <FontAwesomeIcon
                          className={styles.icon}
                          icon={faBriefcase}
                          size="lg"
                        />
                        <div
                          className={`${
                            allInformationCard.offers.hasWorkingPlace
                              ? ""
                              : styles.lineThrough
                          }`}
                        >
                          Working Place
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.rightInformation}>
                <div className={styles.price}>
                  {allInformationCard.pricePerDay} ${" "}
                  <span className={styles.behindWhatTime}>night</span>
                </div>
                <div className={styles.datePicker}>
                  <DatePicker
                    className={styles.datePickerLeft}
                    selected={startDate}
                    onChange={handleDateChangeEntrance}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Select a date"
                    filterDate={isDateBlocked}
                  />
                  <DatePicker
                    className={styles.datePickerRight}
                    selected={endDate}
                    onChange={handleDateChangeDeparture}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Select a date"
                    filterDate={isDateBlocked}
                  />
                </div>
                <DatePicker
                  className={styles.datePickerRightAndLeft}
                  selectsRange={true}
                  startDate={startDate}
                  endDate={endDate}
                  onChange={(date: [string | null, string | null]) => {
                    setDateRange(date);
                  }}
                  isClearable={true}
                  monthsShown={2}
                  dateFormat="dd/MM/yyyy"
                  filterDate={isDateBlocked}
                />
                <Link to="/" className="Link">
                  <button
                    className={styles.buttonFinishDate}
                    onClick={addDateBlocked}
                  >
                    Book
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
