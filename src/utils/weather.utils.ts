export function getIconPath(conditionCode: number, isDay: number) {
  const folder = !!isDay ? "day" : "night";
  return `${folder}/${conditionCode}.webp`;
}

export function getBackgroundImage(currentHour: number, condition: string) {
  if (condition.includes("rain")) {
    if (currentHour >= 6 && currentHour < 18) return "/home/bg/rainny.webp";
    else return "/home/bg/rainny.webp";
  } else if (currentHour >= 5 && currentHour < 8) return "/home/bg/sunrise.webp";
  else if (currentHour >= 8 && currentHour < 16) return "/home/bg/day.webp";
  else if (currentHour >= 16 && currentHour < 19) return "/home/bg/evening.webp";
  else return "/home/bg/night.webp";
}

export const daysMap: Record<string, string> = {
  Sun: "Sunday",
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
  Sat: "Saturday",
};
