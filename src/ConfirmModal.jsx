import { forwardRef, useImperativeHandle, useRef } from "react";

const ConfirmModal = ({ isOpen, close }) => {
  const closeRef = useRef();
  // console.log("closeRef", closeRef);

  // const denyRef = useRef();
  // const confirmRef = useRef();
  // useImperativeHandle(
  //   ref,
  //   () => {
  //     return {
  //       focusCloseBtn: () => closeRef.current.focus(),
  //       focusDenyBtn: () => denyRef.current.focus(),
  //       focusConfirmBtn: () => confirmRef.current.focus(),
  //     };
  //   },
  //   []
  // );

  if (!isOpen) return null;

  return (
    <div >
      <button ref={closeRef} onClick={close}>&times;</button>
    </div>
  );
};

export default ConfirmModal;

// <div>
// <h1>Title</h1>
// </div>
// <div>Do you confirm?</div>
// <div>
// <button ref={confirmRef} onClick={close}>Yes</button>
// <button ref={denyRef} onClick={close}>No</button>
// </div>
