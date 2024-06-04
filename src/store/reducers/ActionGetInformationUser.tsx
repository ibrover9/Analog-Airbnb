import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

export const fetchUserInformation = createAsyncThunk(
  "user/information",
  async () => {
    const apiInformation = "http://localhost:8000/api/v1/user/info";
    const options: RequestInit = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
      credentials: "include", // Включает передачу куки
    };
    const informationUser = await fetch(apiInformation, options);
    const informationUserJson: IUser = await informationUser.json();
    console.log(informationUserJson);
    return informationUserJson;
  }
);
