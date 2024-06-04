import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchResetInformation = createAsyncThunk(
  "user/logout",
  async () => {
    try {
      const options: RequestInit = {
        method: "POST",
        headers: {
          accept: "application/json",
        },
        credentials: "include", // Включает передачу куки
      };

      await fetch("http://localhost:8000/api/v1/user/logout", options);
    } catch (error) {
      alert(error);
    }
  }
);
