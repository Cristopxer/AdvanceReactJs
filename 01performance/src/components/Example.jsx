import { useState } from "react";
import { memo } from "react";

export default function Example() {
  const [name, setName] = useState("");
  const names = ["Luisa", "Lane"];

  // function get a random name
  const getName = () => {
    const random = Math.floor(Math.random() * (names.length));
    return names[random];
  };

  const clearName = () => {
    setName("");
  };

  const obtainName = () => {
    setName(getName());
  };

  return (
    <div>
      <h1>Ract Memo example use</h1>
      <NameComponent name={name} clearName={clearName} />
      <button onClick={() => obtainName()}>Generate Name</button>
    </div>
  );
}

// Child component which will be cached for later use
export const NameComponent = (props) => {
  console.log("Rendering again...");
  return (
    <div>
      <h2>{props.name}</h2>
      <button onClick={() => props.clearName()}>Clear Name</button>
    </div>
  );
};

// Check if the props.name property is equal to the previous value
function namesAreEqual(prevProps, nextProps) {
  return prevProps.name !== nextProps.name;
}

// Stores in cache or render if necessary
export const randomNames = memo(NameComponent, namesAreEqual);
