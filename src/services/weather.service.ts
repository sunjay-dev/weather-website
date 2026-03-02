import { Weather } from "@/types/weather";

type Props = {
  lat?: number | string;
  lon?: number | string;
  city?: string;
};

export async function get_report({ lat, lon, city }: Props): Promise<Weather | null> {
  if (!lat && !lon && !city) return null;

  const cityRegex = /^[a-zA-ZÀ-ÿ\s\-',.]{2,100}$/;
  const latRegex = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/;
  const lonRegex = /^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/;

  if (city) {
    if (!cityRegex.test(city.trim())) {
      return null;
    }
  }

  if (lat && lon) {
    if (!latRegex.test(String(lat)) || !lonRegex.test(String(lon))) {
      return null;
    }
  }

  const q = city ? city : `${lat},${lon}`;

  try {
    const response = await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${q}&days=3&u=c`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.RAPID_API_KEY as string,
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
      },
      next: { revalidate: 600 },
    });
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    return await response.json();
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
}
