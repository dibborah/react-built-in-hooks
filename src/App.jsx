import { useRef, useState } from "react";
import CustomInput from "./CustomInput";

const App = () => {
  const [value, setValue] = useState("red");
  const inputRef = useRef(null);
  return (
    <div>
      <CustomInput
        type="text"
        name="valueElement"
        id="valueElement"
        value={value}
        onChange={(e)=> setValue(e.target.value)}
        ref={inputRef}
      />
      <button onClick={() => inputRef.current.alertHi()}>Submit</button>
    </div>
  );
};

export default App;
