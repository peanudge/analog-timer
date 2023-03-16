import styled from "styled-components";

type Props = {
  degree: number;
  length?: number;
  thick?: number;
};

const AnalogTimerHand: React.FC<Props> = ({
  degree = 0,
  length = 120,
  thick = 4,
}) => {
  const degreeFromYAxis = degree - 90;
  return (
    <Hand degree={degreeFromYAxis} width={length} thick={thick}>
      <HandHead thick={thick} />
    </Hand>
  );
};

type HandProps = { degree: number; width: number; thick: number };
const Hand = styled.div<HandProps>`
  position: absolute;
  width: ${(props) => props.width}px;
  height: ${(props) => props.thick}px;
  background-color: black;
  top: 50%;
  left: 50%;
  transform-origin: 0px 50%;
  border-radius: 4px;
  transform: translate(0, -50%) rotate(${(props) => props.degree}deg);
  display: flex;
  justify-content: end;
`;
const HandHead = styled.div<{ thick: number }>`
  box-sizing: border-box;
  position: absolute;
  width: ${(props) => props.thick * 2}px;
  height: ${(props) => props.thick * 2}px;
  top: -${(props) => props.thick - props.thick / 2}px;
  border-top: ${(props) => props.thick / 2}px solid black;
  border-right: ${(props) => props.thick / 2}px solid black;
  transform: rotate(45deg);
`;
export default AnalogTimerHand;
