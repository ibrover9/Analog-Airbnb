import { MovieInformationHousing } from "../../models/MovieInformationCard";

export async function getAllMovieInformationCard(idHouse: number) {
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
    const allInformationHousingJson: MovieInformationHousing =
      await AllInformationHousing.json();
    return allInformationHousingJson;
  } catch (error) {
    alert(error);
  }
}
