import "./App.css";
import { useEffect, useState } from "react";
import News from "./News";

function App() {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("india");
  const key = "5e4f58abc8d04d3abc98b34ab1629283";
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=${category}&from=2024-01-23&apiKey=${key}`
    )
      .then((res) => {
        // console.log(res);
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        // console.log(data.articles);
        if (data.message !== "") {
          setNews(data.articles);
        } else {
          alert("key expire");
        }
      });
  }, [category]);
  return (
    <div className="App">
      <header>
        <h1>News</h1>
        <input
          type="text"
          onChange={(event) => {
            if (event.target.value !== "") {
              setCategory(event.target.value);
            } else {
              setCategory("india");
            }
          }}
          placeholder="Search News by category"
        />
      </header>

      <section className="news-articles">
        {news.length !== 0 ? (
          news
            .filter((article) => article.title !== "[Removed]")
            .map((article, key) => {
              return (
                <News
                  key={key}
                  img={article.urlToImage}
                  title={article.title}
                  news={article.content}
                  link={article.url}
                  author={article.author}
                  source={article.source.name}
                />
              );
            })
        ) : (
          <h1>News not found</h1>
        )}
      </section>
    </div>
  );
}

export default App;
