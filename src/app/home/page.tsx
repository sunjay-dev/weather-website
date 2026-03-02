import CurrentData from "@/components/home/CurrentData";
import DayForecast from "@/components/home/DayForecast";
import Header from "@/components/home/Header";
import HourlyData from "@/components/home/HourlyData";
import SaveCityToStorage from "@/components/home/SaveCityToStorage";
import Time from "@/components/home/Time";
import { get_report } from "@/services/weather.service";
import { getBackgroundImage } from "@/utils/weather.utils";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Home",
};

type Props = {
  searchParams: Promise<{
    city?: string;
    lat?: string;
    lon?: string;
  }>;
};

export default async function HomePage({ searchParams }: Props) {
  const { city, lat, lon } = await searchParams;

  const weatherData = await get_report({ lat, lon, city });

  if (!weatherData) redirect("/?error=not_found");

  const timeZone = weatherData.location.tz_id;
  const now = new Date();

  const currentHour =
    Number(
      new Intl.DateTimeFormat("en-GB", {
        timeZone,
        hour: "2-digit",
        hourCycle: "h23",
      }).format(now),
    ) + 1;

  const bgImagePath = getBackgroundImage(currentHour - 1, weatherData.current.condition.text);

  return (
    <div className="p-6 min-h-screen relative overflow-hidden">
      <Image src={bgImagePath} alt="Weather Background" fill priority className="object-cover object-left -z-10" />

      <div className="relative z-10">
        <Header />
        <Time data={weatherData} />
        <HourlyData data={weatherData} />
        <CurrentData data={weatherData} />
        <DayForecast data={weatherData} />
        <SaveCityToStorage cityName={weatherData.location.name + ", " + weatherData.location.region} />
      </div>
    </div>
  );
}
