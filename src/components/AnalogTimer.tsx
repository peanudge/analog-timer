import { useEffect, useState } from "react";
import styled from "styled-components";
import AnalogTimerHand from "./AnalogTimerHand";
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
      <AnalogTimerHand degree={90} thick={10} length={80} />
      <AnalogTimerHand degree={45} thick={5} length={120} />
      <AnalogTimerHand degree={180} thick={3} length={140} />
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
