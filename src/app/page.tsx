"use client";
import { LocateFixed } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import toast from "react-hot-toast";

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isLocating, setIsLocating] = useState(false);
  const [lastSearchedCities, setLastSearchedCities] = useState<string[]>([]);

  useEffect(() => {
    if (searchParams.get("error") === "not_found") {
      toast.error("City not found. Please try again.");
      router.replace("/");
    }
  }, [router, searchParams]);

  useEffect(() => {
    const loadState = (cities: string) => setLastSearchedCities(JSON.parse(cities));

    const cities = localStorage.getItem("lastSearchedCities");
    if (cities) loadState(cities);
  }, [router, searchParams]);

  const handleLocation = () => {
    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported by your browser.");
      return;
    }

    setIsLocating(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        router.push(`/home?lat=${latitude.toFixed(3)}&lon=${longitude.toFixed(3)}`);
      },
      (error) => {
        setIsLocating(false);
        console.error("Error getting location:", error);

        if (error.code === error.PERMISSION_DENIED) {
          toast.error("Location permission denied.");
        } else {
          toast.error("Unable to retrieve your location.");
        }
      },
    );
  };

  return (
    <div className="p-6 h-screen relative overflow-hidden">
      <Image src="/home/bg/day.webp" alt="Weather Background" fill priority className="object-cover object-left -z-10" />

      <div className="relative z-10">
        <div>
          <Image src="/logo_white.webp" width={80} height={80} alt="WeatherX Logo" priority />
        </div>

        <div className="p-4">
          <div className="text-center mt-16">
            <h1 id="welcomeMessage" className="text-3xl font-semibold text-white">
              Get real-time weather updates!
            </h1>
          </div>

          <form action="/home" method="GET">
            <p className="text-lg text-white my-4">Search for your location</p>

            <input
              type="text"
              name="city"
              placeholder="Enter city name..."
              required
              className="w-full bg-white text-gray-700 px-3 py-2 rounded-lg border border-white focus:outline-none"
            />

            <button type="submit" className="w-full bg-white text-gray-700 px-4 py-2 rounded-lg mt-3.5">
              Search by City
            </button>
          </form>

          <button
            onClick={handleLocation}
            disabled={isLocating}
            type="button"
            className={`bg-white text-gray-700 px-4 flex justify-center items-center py-2 rounded-lg my-2 w-full ${isLocating ? "cursor-not-allowed" : ""}`}
          >
            <LocateFixed className="w-5 h-5" />
            <span className="ml-2">Detect My Location </span>
          </button>

          <p className="text-lg mt-8 mb-2 text-white">Last Searched Cities</p>

          <form action="/home" className="space-y-1.5">
            {lastSearchedCities.map((city) => (
              <button key={city} type="submit" name="city" value={city} className="w-full bg-white text-gray-700 px-4 py-2 truncate rounded-lg">
                {city}
              </button>
            ))}
          </form>

          <footer className="text-center text-gray-100 text-sm py-7">
            Source code available on{" "}
            <a href="https://github.com/sunjay-dev/Weather-website" target="_blank" className="text-white underline">
              GitHub
            </a>
            .
          </footer>
        </div>
      </div>
    </div>
  );
}

function LoadingState() {
  return (
    <div id="splash-screen" className="flex-col bg-[#4d99e7] min-h-dvh flex items-center justify-center transition duration-1000 ease-out">
      <Image src="/logo_white.webp" alt="WeatherX Logo" width={208} height={208} priority />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<LoadingState />}>
      <SearchContent />
    </Suspense>
  );
}
