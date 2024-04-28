import React, { forwardRef, useImperativeHandle, useRef } from "react";

const CustomInput = ({ isOpen, onClose }, ref) => {
  const closeRef = useRef();
  const confirmRef = useRef();
  const denyRef = useRef();

  useImperativeHandle(
    ref,
    () => {
      return {
        focusCloseBtn: () => closeRef.current.innerText = "Just changed",
        focusConfirmBtn: () => confirmRef.current.focus(),
        focusDenyBtn: () => denyRef.current.focus(),
      };
    },
    []
  );

  if (!isOpen) return null;

  return (
    <div >
      <div>
        <button ref={closeRef} onClick={onClose}>
          &times;
        </button>
        <div>
          <h1>Title</h1>
        </div>
      </div>
      <div>Confirm your modal?</div>
      <div>
        <button ref={confirmRef} onClick={onClose}>
          Yes
        </button>
        <button style={{border:"none"}} ref={denyRef} onClick={onClose}>
          No
        </button>
      </div>
    </div>
  );
};

export default forwardRef(CustomInput);
