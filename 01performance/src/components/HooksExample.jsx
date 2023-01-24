import { useMemo, useState } from "react";

export default function Example() {
  const [name, setName] = useState("");
  const names = ["Luisa", "Lane"];

  // function get a random name
  const getName = () => {
    const random = Math.floor(Math.random() * names.length);
    return names[random];
  };

  const clearName = () => {
    setName("");
  };

  const obtainName = () => {
    setName(getName());
  };

  
// Use memo hook to cache the NameComponent and render it again when name value changes
  const nameComponent = useMemo(
    () => <NameComponent name={name} clearName={clearName} />,
    [name]
  );

  return (
    <div>
      <h1>Ract Memo example useMemo hook</h1>
      {nameComponent}
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
