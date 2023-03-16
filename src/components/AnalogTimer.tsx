import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  AnalogHourHand,
  AnalogMinuteHand,
  AnalogSecondHand,
} from "./AnalogTimerHand";
import Tooltip from "./Tooltip";

const AnalogTimer = () => {
  const [milliseconds, setMilliseconds] = useState(Date.now());
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timerId = setInterval(() => {
      setMilliseconds(Date.now());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const toggleTooltip = (flag: boolean) => setShowTooltip(flag);

  return (
    <TimerContainer
      onMouseEnter={() => toggleTooltip(true)}
      onMouseLeave={() => toggleTooltip(false)}
    >
      {showTooltip ? <Tooltip>{milliseconds}</Tooltip> : null}
      <AnalogHourHand />
      <AnalogMinuteHand />
      <AnalogSecondHand />
      <Origin />
    </TimerContainer>
  );
};

const TimerContainer = styled.div`
  width: 300px;
  height: 300px;
  background-color: rgb(200, 200, 200);
  border-radius: 50%;
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
