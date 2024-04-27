import { forwardRef, useImperativeHandle, useState } from "react";

const Modal = (props, ref) => {
console.log("Child Rendered")
  const [isModalOpen, setIsModalOpen] = useState(false);
    console.log(ref);
  // Again study useRef();
  useImperativeHandle(ref, () => ({
    openModal: () => setIsModalOpen(true)
  }));
  if(!isModalOpen) return null;
  return (
    <div>
      <h1>Modal from child</h1>
      <button onClick={() => setIsModalOpen(false)}>Close</button>
    </div>
  );
};

export default forwardRef(Modal); // When using forwarfRef the
// function have to accept two parameters. // (props, ref)


// useImperative Handle 

// 1. useRef
// 2. forwardRef
// 3. Then do this application again
