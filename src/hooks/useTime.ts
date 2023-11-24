import { useEffect, useState } from "react";
import { timetype } from "../util/type/timetype";
import { useInterval } from "usehooks-ts";
import { findTimeZone, getZonedTime } from "timezone-support";

const handleTime = (timeZone: string): timetype => {
  try {
    const city = findTimeZone(timeZone);
    const native = new Date();
    const cityTime = getZonedTime(native, city);
    return { hour: cityTime.hours, minute: cityTime.minutes };
  } catch {
    const native = new Date();
    return { hour: native.getHours(), minute: native.getMinutes() };
  }
};

const useTime = (timeZone: string = "", period: number = 60000): timetype => {
  const [time, setTime] = useState<timetype>({ hour: 0, minute: 0 });

  useInterval(() => {
    setTime(handleTime(timeZone));
  }, period);

  useEffect(() => {
    setTime(handleTime(timeZone));
  }, []);

  return time;
};

export default useTime;
