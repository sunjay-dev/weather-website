import { Forecastday } from "@/types/weather";
import { getIconPath } from "@/utils/weather.utils";
import Image from "next/image";

type Prop = {
  day: Forecastday;
};

export default function DayForecastCard({ day }: Prop) {
  const dayName = new Date(day.date).toLocaleDateString("en-US", { weekday: "short" });
  const iconPath = getIconPath(day.day.condition.code, 1);

  return (
    <div className="grid grid-cols-[1fr_2.3fr_1.5fr] items-center p-2">
      <p className="text-lg font-medium text-start">{dayName}</p>

      <div className="flex items-center justify-start truncate">
        <Image src={`/home/${iconPath}`} alt="Weather Icon" width={40} height={40} />
        <p className="ml-2 font-medium truncate">{day.day.condition.text}</p>
      </div>

      <p className="font-bold text-lg text-center truncate">
        {day.day.maxtemp_c}° <span className="font-medium text-sm">{day.day.mintemp_c}°</span>
      </p>
    </div>
  );
}
