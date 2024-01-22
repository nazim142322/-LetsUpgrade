import "./App.css";
function App() {
  let coountries = [
    { name: "india", capital: "New Delhi" },
    { name: "South Africa", capital: "Cape Town" },
    { name: "New Zealand", capital: "Wellington" },
  ];
  return (
    <div className="App">
      {coountries.map((element, index) => {
        return (
          <div key={index}>
            <h1>{element.name}</h1>
            <h2>{element.capital}</h2>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
export default App;
