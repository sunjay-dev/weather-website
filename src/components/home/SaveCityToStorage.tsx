"use client";

import { useEffect } from "react";

type Props = {
  cityName: string;
};

export default function SaveCityToStorage({ cityName }: Props) {
  useEffect(() => {
    if (!cityName) return;

    const storedCities = localStorage.getItem("lastSearchedCities");
    let cities: string[] = storedCities ? JSON.parse(storedCities) : [];

    cities = cities.filter((c) => c.toLowerCase() !== cityName.toLowerCase());

    cities.unshift(cityName);

    cities = cities.slice(0, 3);

    localStorage.setItem("lastSearchedCities", JSON.stringify(cities));
  }, [cityName]);

  return null;
}
