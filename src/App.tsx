import styled from "styled-components";
import AnalogTimer from "./components/AnalogTimer";

function App() {
  return (
    <Container>
      <AnalogTimer />
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  height: 100vh;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default App;
