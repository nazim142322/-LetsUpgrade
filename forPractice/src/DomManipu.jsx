import { useRef } from "react";
const DomManipu = () => {
  let pTag = useRef();
  console.log(pTag.current);
  return (
    <div>
      <p ref={pTag}>hello world</p>
    </div>
  );
};

export default DomManipu;
