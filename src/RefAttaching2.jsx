import { useEffect } from "react";
import { useRef, forwardRef } from "react";

const FunctionalInput = forwardRef((props, ref) => {
  const internalMethod = () => {
    console.log("internal method is called !!!");
  };
  return <input />;
});

const RefAttaching2 = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    console.log("input value", inputRef.current);
  }, []); 
  return (
    <div>
      <FunctionalInput ref={inputRef} />
    </div>
  );
};

export default RefAttaching2;
