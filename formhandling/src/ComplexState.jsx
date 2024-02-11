import { useState } from "react";

const ComplexState = () => {
  let [animals, setAnimals] = useState(["Lion", "Cheetah", "Hyena"]);
  function addAnimal() {
    setAnimals((pre) => {
      console.log(pre);
      return [...pre, "Deer"];
    });
  }
  return (
    <>
      {animals.map((animal, key) => {
        return <h3 key={key}>{animal}</h3>;
      })}
      <button onClick={addAnimal}>add new animal</button>
    </>
  );
};

export default ComplexState;
