import { useState, useRef } from "react";
import CustomInput from "./CustomInput";

const App = () => {
  const [open, setOpen] = useState(false);
  const modalRef = useRef();
  return (
    <div>
      <button onClick={() => setOpen(true)}>Open</button>
      <button onClick={() => modalRef.current.focusCloseBtn()}>
        Focus Close
      </button>
      <br />
      <button onClick={() =>  modalRef.current.focusConfirmBtn()}>
        Focus Confirm
      </button>
      <button onClick={() => modalRef.current.focusDenyBtn()}>
        Focus Deny
      </button>
      <CustomInput ref={modalRef} isOpen={open} onClose={() => setOpen(false)}/>
    </div>
  );
};

export default App;
