import { Current } from "@/types/weather";
import Image from "next/image";

type Props = {
  hour: Current;
};

export default function HourlyCard({ hour }: Props) {
  function getIconPath(conditionCode: number, isDay: number) {
    const folder = !!isDay ? "day" : "night";
    return `${folder}/${conditionCode}.webp`;
  }
  return (
    <div className="text-center">
      <p className="text-sm">{hour.time?.split(" ")[1]}</p>
      <Image src={`/home/${getIconPath(hour.condition.code, hour.is_day)}`} alt="Weather" width={44} height={44} className="object-cover mt-2" />
      <p className="text-sm mt-2">{hour.temp_c}°C</p>
      <p className="text-xs text-gray-200 mt-1">{hour.chance_of_rain}% Rain</p>
    </div>
  );
}
