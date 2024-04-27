import { useRef } from "react";

// Notes on useRef:
// useRef doesnot trigger re-render// so UI won't be directly changed is the current value is changed
// useRef is directly mutable unlike useState;  
// useRef doesnot conserves states or current values as useState does;

const ExampleUseRef = () => {
  const h1Ref = useRef();
  const handleClick = () => {
    const h1Element = h1Ref.current;
    console.log(h1Element);
    h1Element.innerText = "Hi Harshit";
    h1Element.style.background = "blue"
    h1Element.style.color = "white"
  };
  return (
    <div>
      <h1 ref={h1Ref}>Hello There!!!</h1>
      <button onClick={handleClick}>Change content</button>
    </div>
  );
};

export default ExampleUseRef;
