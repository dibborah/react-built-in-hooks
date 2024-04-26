import { useState } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

const ParentComponent = () => {
  console.log("Parent Component Rendering");
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(50000);

  const incrementAge = () => {
    setAge(age + 1);
  };
  const incrementSalary = () => {
    setSalary(salary + 1000);
  };

  return (
    <div>
      <Title text="Title" />
      {
        // Count and Button are made reusable
      }
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
};

export default ParentComponent;
