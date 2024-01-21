import "./App.css";
function App() {
  let login = 0;

  return (
    <div className="App">
      {(() => {
        if (login) {
          return (
            <div>
              <h1>true</h1>
            </div>
          );
        } else {
          return (
            <div>
              <h1>False</h1>
            </div>
          );
        }
      })()}
    </div>
  );
}

export default App;
