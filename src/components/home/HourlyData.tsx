import { Weather } from "@/types/weather";
import HourlyCard from "../cards/HourlyCard";

type Props = {
  data: Weather;
};

export default function HourlyData({ data }: Props) {
  const timeZone = data.location.tz_id;
  const now = new Date();

  const currentHour =
    Number(
      new Intl.DateTimeFormat("en-GB", {
        timeZone,
        hour: "2-digit",
        hourCycle: "h23",
      }).format(now),
    ) + 1;

  let hourlyData = [];

  if (24 - currentHour >= 4) {
    hourlyData = data.forecast.forecastday[0].hour.slice(currentHour, currentHour + 4);
  } else {
    const todayHours = data.forecast.forecastday[0].hour.slice(currentHour, 24);
    const tomorrowHours = data.forecast.forecastday[1].hour.slice(0, 4 - todayHours.length);
    hourlyData = [...todayHours, ...tomorrowHours];
  }

  return (
    <div className="bg-gray-600/5 rounded-2xl flex justify-between items-center p-4 border border-white/10 shadow-lg">
      {hourlyData.map((hour) => (
        <HourlyCard key={hour.time} hour={hour} />
      ))}
    </div>
  );
}
