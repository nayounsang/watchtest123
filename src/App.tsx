import React, { useState } from "react";
import "./App.css";
import Watch from "./component/Watch";
import useTime from "./hooks/useTime";
import { timetype } from "./util/type/timetype";
import { formatHHMM } from "./util/function/getTimeFormat";

const myFormat = (time: timetype, city: string) => {
  return formatHHMM(time.hour, time.minute) + city;
};

function App() {
  const time = useTime();
  const berlinTime = useTime("Europe/Berlin");
  const newyorkTime = useTime("America/New_York");
  const [value, setValue] = useState(0);
 
  

  return (
    <div className="app">
      <h1>size</h1>
      <h3>
      Customize text style with mix-blend-mode or font-color.
      </h3>
      <h3>
      Set the time using the slide bar
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <input
          type="range"
          min={0}
          max={1439}
          color="gray"
          step={0.001}
          value={value}
          onChange={(event) => {
            setValue(Math.floor(event.target.valueAsNumber));
          }}
        />
        <Watch
          size="huge"
          dayStyle={{ backgroundColor: "orange" }}
          nightStyle={{ backgroundColor: "darkblue" }}
          time={time}
        />
        <Watch
          size="big"
          dayStyle={{ backgroundColor: "orange" }}
          nightStyle={{ backgroundColor: "darkblue" }}
          time={{ hour: Math.floor(value / 60), minute: value % 60 }}
          timeStyle={{ mixBlendMode: "overlay", color: "white" }}
        />
        <Watch
          size="medium"
          dayStyle={{ backgroundColor: "orange" }}
          nightStyle={{ backgroundColor: "darkblue" }}
          time={time}
        />
        <Watch
          size="small"
          dayStyle={{ backgroundColor: "orange" }}
          nightStyle={{ backgroundColor: "darkblue" }}
          time={{ hour: Math.floor(value / 60), minute: value % 60 }}
          timeStyle={{ mixBlendMode: "overlay", color: "black" }}
        />
        <Watch
          size="tiny"
          dayStyle={{ backgroundColor: "orange" }}
          nightStyle={{ backgroundColor: "darkblue" }}
          time={time}
          timeStyle={{ color:"white" }}
        />
      </div>
      <h1>round</h1>
      <Watch
        size="medium"
        dayStyle={{ backgroundColor: "orange" }}
        nightStyle={{ backgroundColor: "darkblue" }}
        time={time}
        round={true}
      />
      <h1>world</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <Watch
          size="medium"
          dayStyle={{
            backgroundImage:
              "url(https://cdn.pixabay.com/photo/2020/05/01/15/18/brand-front-of-the-brandenburg-gate-5117579_1280.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          nightStyle={{
            backgroundImage:
              "url(https://cdn.pixabay.com/photo/2019/12/13/12/00/berlin-4692820_1280.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          timeStyle={{
            color: "#eee",
            fontSize: "0.8em",
            textShadow: `-1px 0px black, 0px 1px black, 1px 0px black, 0px -1px black`,
          }}
          time={berlinTime}
          timeFormat={() => myFormat(berlinTime, "BER")}
        />
        <Watch
          size="medium"
          dayStyle={{
            backgroundImage:
              "url(https://cdn.pixabay.com/photo/2019/09/25/20/24/nowyjork-4504629_1280.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          nightStyle={{
            backgroundImage:
              "url(https://cdn.pixabay.com/photo/2020/02/05/22/07/newyork-4822523_1280.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          timeStyle={{
            color: "#eee",
            fontSize: "0.8em",
            textShadow: `-1px 0px black, 0px 1px black, 1px 0px black, 0px -1px black`,
          }}
          time={newyorkTime}
          timeFormat={() => myFormat(newyorkTime, "NYC")}
        />
      </div>
    </div>
  );
}

export default App;
