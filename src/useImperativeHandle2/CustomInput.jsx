import { forwardRef, useImperativeHandle } from "react";
// UseImperativeHandle is not need when we need to pass one ref directly to a single element
// inside a component

// When multiple refs are need to be passed or/and a custom ref with custom methods is needed
// to be made, only than useImperativeHandle hook should be used

// useImperativeHandle => Create a custom ref. Create a custom method

const CustomInput = (props, ref) => {
  useImperativeHandle(
    ref,
    () => {
      return { alertHi: () => alert("Hi") };
    },
    []
  );

  return (
    <div>
      <input {...props} ref={ref} />
    </div>
  );
};

export default forwardRef(CustomInput);
