import { useRef } from "react";
const Refdemo = () => {
  let pTag = useRef(); //blank useRef
  console.log(pTag);
  return (
    <>
      <p ref={pTag}>hello world</p>
      <button
        onClick={() => {
          pTag.current.innerHTML = "red";
        }}
      >
        change content
      </button>
    </>
  );
};

export default Refdemo;
