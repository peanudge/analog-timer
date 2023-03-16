import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [milliseconds, setMilliseconds] = useState(Date.now());
  useEffect(() => {
    const timerId = setInterval(() => {
      setMilliseconds(Date.now());
    }, 100);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="Container">
      <div className="AnalogTimer" title={String(milliseconds)}>
        <div className="Origin"></div>
        <div className="Hand HourHand"></div>
        <div className="Hand MinHand"></div>
        <div className="Hand SecHand"></div>
      </div>
    </div>
  );
}

export default App;
