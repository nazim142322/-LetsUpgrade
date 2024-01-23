import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  }, []);
  return (
    <div className="App">
      <h1>hello world</h1>
      {/* <pre>{JSON.stringify(users)}</pre> */}
      {users.map((elm, index) => {
        return (
          <div key={index}>
            <h3>Name - {elm.name}</h3>
            <h3>email - {elm.email}</h3>
          </div>
        );
      })}
    </div>
  );
}
export default App;
