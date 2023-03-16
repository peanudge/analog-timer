import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  AnalogHourHand,
  AnalogMinuteHand,
  AnalogSecondHand,
} from "./AnalogTimerHand";
import { TimerTickGroup } from "./TimerTick";
import Tooltip from "./Tooltip";

const padTo2Digit = (num: number) => {
  return num.toString().padStart(2, "0");
};

const AnalogTimer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timerId = setInterval(() => {
      const milliseconds = Date.now();
      let seconds = Math.floor(milliseconds / 1000);
      let minutes = Math.floor(seconds / 60);
      let hours = Math.floor(minutes / 60);
      seconds = seconds % 60;
      minutes = minutes % 60;
      hours = (hours + 9) % 24;
      setSeconds(seconds);
      setMinutes(minutes);
      setHours(hours);
    }, 100);

    return () => {
      clearInterval(timerId);
    };
  }, [setSeconds, setMinutes, setHours]);

  const toggleTooltip = (flag: boolean) => setShowTooltip(flag);

  return (
    <TimerContainer
      onMouseEnter={() => toggleTooltip(true)}
      onMouseLeave={() => toggleTooltip(false)}
    >
      {showTooltip ? (
        <Tooltip>{`${padTo2Digit(hours)}:${padTo2Digit(minutes)}:${padTo2Digit(
          seconds
        )}`}</Tooltip>
      ) : null}
      <AnalogHourHand hours={hours} minutes={minutes} />
      <AnalogMinuteHand minutes={minutes} seconds={seconds} />
      <AnalogSecondHand seconds={seconds} />
      <Origin />
      <TimerTickGroup />
    </TimerContainer>
  );
};

const TimerContainer = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  border: 1px solid black;
`;

const Origin = styled.div`
  position: absolute;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default AnalogTimer;
