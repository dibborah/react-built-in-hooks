import { useRef } from "react";

// Notes on useRef:
// useRef doesnot trigger re-render// so UI won't be directly changed is the current value is changed
// useRef is directly mutable unlike useState;
// useRef doesnot conserves states or current values as useState does;

const ExampleUseRef = () => {
  const h1username = useRef();
  const h1Password = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(h1username.current.value);
    console.log(h1Password.current.value);
    // alert(h1username.current.value);s
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <br />
      <input ref={h1username} type="text" name="username" id="username" />
      <br />    
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input ref={h1Password} type="password" name="password" id="password" />
      <br />    
      <br />
      <button>Show value</button>
    </form>
  );
};

export default ExampleUseRef;

// const ExampleUseRef = () => {
//   const h1Ref = useRef();
//   const handleClick = () => {
//     const h1Element = h1Ref.current;
//     console.log(h1Element);
//     h1Element.innerText = "Hi Harshit";
//     h1Element.style.background = "blue"
//     h1Element.style.color = "white"
//   };
//   return (
//     <div>
//       <h1 ref={h1Ref}>Hello There!!!</h1>
//       <button onClick={handleClick}>Change content</button>
//     </div>
//   );
// };

// export default ExampleUseRef;
