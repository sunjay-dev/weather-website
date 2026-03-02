"use client";
import { LocateFixed } from "lucide-react";

export default function Location() {
  function handleFetchUserLocation(e: any) {
    e.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
        },
        (error) => {
          let errorMessage = "An error occurred while fetching location.";
          if (error.code === 1) errorMessage = "Location access denied. Please allow permission.";
          else if (error.code === 2) errorMessage = "Location unavailable.";
          else if (error.code === 3) errorMessage = "Request timed out. Try again.";
        },
        { timeout: 5000, maximumAge: 0 },
      );
    }
  }

  return (
    <button onClick={handleFetchUserLocation} className="bg-white text-gray-700 px-4 flex justify-center items-center py-2 rounded-lg my-2 w-full">
      <LocateFixed className="w-5 h-5" />
      <span className="ml-2">Detect My Location </span>
    </button>
  );
}
