"use client";

import { Weather } from "@/types/weather";
import { daysMap } from "@/utils/weather.utils";
import { useEffect, useState } from "react";

export default function Time({ data }: { data: Weather }) {
  const [currentTime, setCurrentTime] = useState("--:--");
  const timeZone = data.location.tz_id;
  const dateAndMonth = new Date(data.forecast.forecastday[0].date).toDateString().split(" ");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const localTime = new Intl.DateTimeFormat("en-GB", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h23",
      }).format(now);
      setCurrentTime(localTime);
    };

    updateTime();

    const now = new Date();
    const seconds = now.getSeconds();

    const msUntilNextMinute = (60 - seconds) * 1000;
    const timeOut = setTimeout(() => {
      updateTime();
      setInterval(updateTime, 60000);
    }, msUntilNextMinute);

    return () => clearTimeout(timeOut);
  }, [timeZone]);

  return (
    <div className="text-center mt-14 mb-10">
      <h1 className="text-6xl font-bold">{currentTime}</h1>
      <p className="mb-4 mt-1 text-gray-100 text-lg">
        {daysMap[dateAndMonth[0]]} | {dateAndMonth[1]} {dateAndMonth[2]}{" "}
      </p>
    </div>
  );
}
