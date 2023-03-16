import { useEffect, useState } from "react";
import styled from "styled-components";
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
      {/* <div className="Origin"></div>
      <div className="Hand HourHand"></div>
      <div className="Hand MinHand"></div>
      <div className="Hand SecHand"></div> */}
    </TimerContainer>
  );
};

const TimerContainer = styled.div`
  width: 300px;
  height: 300px;
  background-color: rgb(200, 200, 200);
  border-radius: 50%;
`;

export default AnalogTimer;
