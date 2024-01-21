import "./App.css";
function App() {
  //let login;//false
  //let login = "nazim";//true
  //let login = 0; //false
  let login = 1; //true

  return <div className="App">{login ? <h1>true</h1> : <h1>false</h1>}</div>;
}

export default App;
