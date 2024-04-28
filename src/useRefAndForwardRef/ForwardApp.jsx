import { useEffect, useRef } from "react";
import Audio from "./Audio";
import "./App.css";

const App = () => {
  const audioRef = useRef(null);
  const handlePlay = () => {
    audioRef.current.play();
  }
  const handlePause = () => {
    audioRef.current.pause();
  }
  return (
    <div className="App">
      <Audio ref={audioRef} text={"Play or Pause your Audience"}/>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
};

export default App;
