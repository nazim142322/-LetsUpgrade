function News(props) {
  // console.log(props.source);
  return (
    <div className="news">
      <div className="newsImg">
        {props.img !== null ? (
          <img src={props.img} alt="" />
        ) : (
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg" />
        )}
      </div>
      <h2>{props.title}</h2>
      <p>{props.news?.substring(0, 100).concat("...")}</p>
      <a href={props.link} target="_blank">
        Read More
      </a>
      <div className="source">
        <p>Author : {props.author}</p>
        <p>{props.source}</p>
      </div>
    </div>
  );
}
export default News;
