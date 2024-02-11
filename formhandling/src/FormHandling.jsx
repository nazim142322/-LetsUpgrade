import { useState } from "react";
export const FormHandling = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  function handleName(event) {
    setName(() => event.target.value);
  }
  function handleEmail(event) {
    setEmail(() => event.target.value);
  }
  let obj = { name, email };
  console.log(obj);

  return (
    <>
      {/* <ComplexState /> */}
      <h4>{name}</h4>
      <h4>{email}</h4>
      <input
        type="text"
        onChange={handleName}
        value={name}
        placeholder="enter name"
      />
      <input
        type="email"
        onChange={handleEmail}
        value={email}
        placeholder="enter email"
      />
    </>
  );
};
