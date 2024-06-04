import { createAsyncThunk } from "@reduxjs/toolkit";
import { CardsHousing } from "../../models/Cards";

export const fetchCardsHousing = createAsyncThunk("cards/housing", async () => {
  const apiCardsHousing = "http://localhost:8000/api/v1/hotel";
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
    credentials: "include", // Включает передачу куки
  };
  const CardsHousing = await fetch(apiCardsHousing, options);
  const CardsHousingJson: CardsHousing[] = await CardsHousing.json();
  return CardsHousingJson;
});
