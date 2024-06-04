import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchCardsHousing } from "./ActionGetCardsHouse";
import { CardsHousing } from "../../models/Cards";

interface CardsState {
  housing: CardsHousing[];
  isLoading: boolean;
  error: string;
}

export const initialState: CardsState = {
  housing: [],
  isLoading: false,
  error: "",
};

export const cardsReduce = createSlice({
  name: "cards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCardsHousing.pending, (state) => {
        state.isLoading = true;
        console.log(`ЛоадерКарточек жилищ${state.isLoading}`);
      })
      .addCase(fetchCardsHousing.fulfilled, (state, action) => {
        state.housing = action.payload;
        console.log(state.housing);
      })
      .addCase(fetchCardsHousing.rejected, (state, action) => {
        state.isLoading = false; 
        if (typeof action.payload === "string") {
          state.error = action.payload;
        }
        console.log(`ОшибкаКарточек Жилищ${state.error}`);
      });
  },
});

// default: {
//   // throw Error("Unknown action: " + action.type);
//   return state;
// }

export default cardsReduce.reducer;
