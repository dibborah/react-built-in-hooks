import React, { forwardRef } from "react";
import sampleAudio1 from "./assets/sampleAudio1.mp3";

const Audio = (props, ref) => {
  return (
    <div>
      <header>
        <h2>{props.text}</h2>
      </header>
      <audio src={sampleAudio1} ref={ref} />
    </div>
  );
};

export default forwardRef(Audio);
