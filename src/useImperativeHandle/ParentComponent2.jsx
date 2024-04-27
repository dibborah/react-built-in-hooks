import { useRef } from "react";
import Modal from "./Modal";

const ParentComponent2 = () => {
  console.log("Parent Rendered");
  
  const modalRef = useRef();

  const handleOpenModal = () => {
    modalRef.current.openModal();
  };

  return (
    <div>
      <Modal ref={modalRef} />
      <button onClick={handleOpenModal}>Open Modal</button>
    </div>
  );
};

export default ParentComponent2;
