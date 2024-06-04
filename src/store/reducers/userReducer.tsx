import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchUserInformation } from "./ActionGetInformationUser";
import { fetchResetInformation } from "./ActionResetInformation";
import { fetchUserHistory } from "./ActionGetHistoryReservationHotel";
import { HistoryReservations, IUser } from "../../models/IUser";

interface UserState {
  // users: IUser[]
  anonymous: boolean;
  id: number | null;
  username: string | null;
  roles: string[] | null;
  isLoading: boolean;
  error: string;
  reservations: HistoryReservations | null;
}

export const initialState: UserState = {
  anonymous: true,
  id: null,
  username: "",
  roles: [],
  isLoading: false,
  error: "",
  reservations: null,
};

export const userReduce = createSlice({
  name: "user",
  initialState,
  reducers: {
    RESET_INFORMATION(state, action: PayloadAction<IUser>) {
      console.log(action.payload.anonymous);
      state.anonymous = true;
      state.id = null;
      state.username = "";
      state.roles = [];
      state.reservations = null;
      console.log(state.anonymous);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInformation.pending, (state) => {
        state.isLoading = true;
        console.log(`Лоадер${state.isLoading}`);
      })
      .addCase(fetchUserInformation.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false; // Устанавливаем isLoading в false, когда запрос выполнен
        state.anonymous = action.payload.anonymous;
        state.id = action.payload.id;
        state.username = action.payload.username;
        state.roles = action.payload.roles;
        console.log(state.username);
      })
      .addCase(fetchUserInformation.rejected, (state, action) => {
        state.isLoading = false; // Устанавливаем isLoading в false, когда запрос отклонен
        if (typeof action.payload === "string") {
          state.error = action.payload;
        }
        console.log(`Ошибка${state.error}`);
      })
      .addCase(fetchResetInformation.pending, (state) => {
        state.isLoading = true;
        console.log(`Лоадерлогаут${state.isLoading}`);
      })
      .addCase(fetchResetInformation.fulfilled, (state, action) => {
        console.log("Выполнено");
      })
      .addCase(fetchResetInformation.rejected, (state, action) => {
        state.isLoading = false; // Устанавливаем isLoading в false, когда запрос отклонен
        if (typeof action.payload === "string") {
          state.error = action.payload;
        }
        console.log(`Ошибкалогаут${state.error}`);
      })
      .addCase(fetchUserHistory.pending, (state) => {
        state.isLoading = true;
        console.log(`Лоадерлогаут${state.isLoading}`);
      })
      .addCase(fetchUserHistory.fulfilled, (state, action) => {
        state.reservations = action.payload;
        console.log("Выполнено");
        console.log(state.reservations);
      })
      .addCase(fetchUserHistory.rejected, (state, action) => {
        state.isLoading = false; // Устанавливаем isLoading в false, когда запрос отклонен
        if (typeof action.payload === "string") {
          state.error = action.payload;
        }
        console.log(`Ошибкалогаут${state.error}`);
      });
  },
});

// default: {
//   // throw Error("Unknown action: " + action.type);
//   return state;
// }

export default userReduce.reducer;
