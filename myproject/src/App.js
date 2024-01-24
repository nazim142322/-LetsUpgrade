import "./App.css";
import { useEffect, useState } from "react";
import News from "./News";

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=india&from=2024-01-23&apiKey=5e4f58abc8d04d3abc98b34ab1629283`
    )
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        console.log(data.articles);
        setNews(data.articles);
      });
  }, []);
  return (
    <div className="App">
      <header>
        <h1>News</h1>
        <input type="text" placeholder="Search News" />
      </header>

      <section className="news-articles">
        <News />
        <News />
        <News />
        <News />
      </section>
    </div>
  );
}

export default App;
