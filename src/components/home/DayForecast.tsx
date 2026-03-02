import { Weather } from "@/types/weather";
import DayForecastCard from "../cards/DayForecastCard";

type Props = {
  data: Weather;
};
export default function DayForecast({ data }: Props) {
  return (
    <div className="bg-gray-600/5 rounded-2xl p-4 mt-4 mb-8 border border-white/10 shadow-lg">
      {data.forecast.forecastday.slice(1).map((day) => (
        <DayForecastCard key={day.date_epoch} day={day} />
      ))}
    </div>
  );
}
