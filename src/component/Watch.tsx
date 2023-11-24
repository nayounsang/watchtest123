import React, { useEffect, useState } from "react";
import { timetype } from "../util/type/timetype";
import { formatHHMM } from "../util/function/getTimeFormat";
import WatchContainer from "./WatchContainer";
import WatchChildren from "./WatchChildren";
import {sizeSelectType } from "../util/type/sizetype";

interface proptype {
  containerStyle?: React.CSSProperties;
  dayStyle?: React.CSSProperties;
  nightStyle?: React.CSSProperties;
  timeStyle?: React.CSSProperties;
  size?: keyof sizeSelectType;
  timeFormat?: (...args: any[]) => string;
  time: timetype;
  round?: boolean;
}

const Watch = ({
  containerStyle,
  dayStyle,
  nightStyle,
  time,
  size,
  timeFormat = formatHHMM,
  timeStyle,
  round = false,
}: proptype) => {

  return (
    <WatchContainer style={containerStyle} size={size}>
      <WatchChildren
        dayStyle={dayStyle}
        nightStyle={nightStyle}
        time={time}
        timeFormat={timeFormat}
        timeStyle={timeStyle}
        round={round}
      />
    </WatchContainer>
  );
};

export default Watch;
