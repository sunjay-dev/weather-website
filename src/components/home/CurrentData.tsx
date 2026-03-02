import { Weather } from "@/types/weather";
import { getIconPath } from "@/utils/weather.utils";
import Image from "next/image";
import RefreshPage from "./RefreshPage";

type Props = {
  data: Weather;
};

export default function CurrentData({ data }: Props) {
  return (
    <div className="bg-gray-600/5 rounded-2xl p-6 mt-4 border border-white/10 shadow-lg">
      <div className="flex items-center justify-between">
        <p className="text-lg truncate">
          {data.location.name}, {data.location.region}
        </p>
        <RefreshPage />
      </div>
      <div className="flex justify-between items-center mt-9 mb-6">
        <div className="space-y-1 w-3/5">
          <h2 className="text-6xl font-bold">{data.current.temp_c}°</h2>
          <p className="text-gray-100 truncate">{data.current.condition.text}</p>
          <p className="text-xs text-gray-100">Chance of Rain: {data.forecast.forecastday[0].day.daily_chance_of_rain}%</p>
          <p className="text-xs text-gray-100">Humidity: {data.current.humidity}%</p>
        </div>
        <Image
          src={`/home/${getIconPath(data.current.condition.code, data.current.is_day)}`}
          id="currentWeatherImg"
          alt="Weather"
          width={112}
          height={112}
          className="w-28 h-28"
        />
      </div>
    </div>
  );
}
