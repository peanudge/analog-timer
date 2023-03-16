import styled from "styled-components";
import React, { PropsWithChildren } from "react";

type Props = { degree: number };
export const TimerTick: React.FC<PropsWithChildren<Props>> = ({
  degree,
  children,
}) => {
  const degreeFromYAxis = degree - 90;
  return (
    <Tick degree={degreeFromYAxis}>
      <TickLabel degree={degreeFromYAxis}>{children}</TickLabel>
    </Tick>
  );
};

const Tick = styled.div<{ degree: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 180px;
  transform-origin: 0px 50%;
  transform: translate(0, -50%) rotate(${(props) => props.degree}deg);
  display: flex;
  justify-content: end;
`;

const TickLabel = styled.div<{ degree: number }>`
  color: black;
  font-weight: bold;
  margin: 0px;
  padding: 0px;
  transform: rotate(${(props) => -props.degree}deg);
`;

export const TimerTickGroup = () => {
  return (
    <>
      <TimerTick degree={30}>1</TimerTick>
      <TimerTick degree={60}>2</TimerTick>
      <TimerTick degree={90}>3</TimerTick>
      <TimerTick degree={120}>4</TimerTick>
      <TimerTick degree={150}>5</TimerTick>
      <TimerTick degree={180}>6</TimerTick>
      <TimerTick degree={210}>7</TimerTick>
      <TimerTick degree={240}>8</TimerTick>
      <TimerTick degree={270}>9</TimerTick>
      <TimerTick degree={300}>10</TimerTick>
      <TimerTick degree={330}>11</TimerTick>
      <TimerTick degree={360}>12</TimerTick>
    </>
  );
};
