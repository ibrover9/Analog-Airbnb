import { createAsyncThunk } from "@reduxjs/toolkit";
import { HistoryReservations } from "../../models/IUser";

export const fetchUserHistory = createAsyncThunk("user/history", async () => {
  const apiHistory = "http://localhost:8000/api/v1/user/reservations";
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
    credentials: "include", // Включает передачу куки
  };
  const HistoryReservationUser = await fetch(apiHistory, options);
  const HistoryReservationUserJson: HistoryReservations =
    await HistoryReservationUser.json();
  console.log(HistoryReservationUserJson);
  return HistoryReservationUserJson;
});
