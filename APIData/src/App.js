import "./App.css";
import { useEffect, useState  } from "react";
function App() {
  const [users, setUser] = useState([]);
  useEffect(() => {


    async function fetchData () {
      try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
        if(!res.ok){
          throw Error(res.statusText)
        }
        const data = await res.json();
        console.log(data);
        console.log(typeof data)//object
        setUser(data); 
      }
      catch(error){
       alert(error)
      }
    }
   fetchData();
  }, []);
  return (
    <div className="App">
      <h1>hello world</h1>
      <pre>{JSON.stringify(users)}</pre>
      {
        users.map((elm, key)=>{
          return (
            <div key={key}>
                <h1>{elm.name}</h1>
                <h2>{elm.email}</h2>
            </div>
          )
          
        })
      }      
    </div>
  );
}
export default App;
