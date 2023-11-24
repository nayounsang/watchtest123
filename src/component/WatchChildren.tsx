import React, { useEffect, useState } from "react";
import TimeDiv from "./TimeDiv";
import useComponentSize from "../hooks/useComponentSize";
import { timetype } from "../util/type/timetype";
import { formatHHMM } from "../util/function/getTimeFormat";
import getPolygon from "../util/function/getPolygon";

interface proptype {
  dayStyle?: React.CSSProperties;
  nightStyle?: React.CSSProperties;
  timeStyle?: React.CSSProperties;
  timeFormat: (h: number, m: number) => string;
  time: timetype;
  round: boolean;
}

const WatchChildren = ({
  dayStyle,
  nightStyle,
  time,
  timeFormat = formatHHMM,
  timeStyle,
  round,
}: proptype) => {
  const [polygon, setPolygon] = useState<string>(
    "polygon(0 0, 100% 0, 100% 100%, 50% 100%, 0 100%)"
  );
  const [isDay, setIsDay] = useState<boolean>(true); //0~720m: night 720~1440m:day

  const [componentRef, componentSize] = useComponentSize();

  useEffect(() => {
    const minute = time.hour * 60 + time.minute;
    setPolygon(getPolygon(minute, componentSize.width, componentSize.height));
    setIsDay(minute >= 720);
  }, [time, componentSize]);

  return (
    <div ref={componentRef}>
      <div
        style={{
          ...(isDay ? nightStyle : dayStyle),
          ...(round
            ? {
                borderRadius: `${componentSize.height}px ${componentSize.height}px 0 0`,
              }
            : {}),
        }}
      />
      <div
        style={{
          ...(isDay ? dayStyle : nightStyle),
          ...(round
            ? {
                borderRadius: `${componentSize.height}px ${componentSize.height}px 0 0`,
              }
            : {}),
          clipPath: polygon,
        }}
      />
      <TimeDiv text={timeFormat(time.hour, time.minute)} style={timeStyle} />
    </div>
  );
};

export default WatchChildren;
