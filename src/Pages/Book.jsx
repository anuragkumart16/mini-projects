import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import "./css/book.css";
import Loading from "../components/Loading/Loading";

function Book() {
  const url = "https://gutendex.com/books/";
  const [data, setdata] = useState(null);
  const [triggered, setTriggered] = useState(false);
  const [fetched, setFetched] = useState(false);

  async function fetchBookData() {
    setdata(null);
    setTriggered(true);
    const response = await fetch(url);
    const item = await response.json();
    console.log(item);
    const length = item.results.length;
    const index = Math.floor(Math.random() * length + 1);
    setdata(item.results[index]);
    console.log(data);
    setFetched(true);
  }
  return (
    <>
      <Navbar />
      <div className="PageWrapper">
        <div className="book-holder">
          {triggered ?
            (data ? (
              <>
                <img src={data.formats["image/jpeg"]} style={{}} alt="" />
                <div style={{marginLeft:"20px"}}>
                  <p style={{ fontSize: "1.2rem" }}>
                    {data.title}
                  </p>
                  <p style={{ marginTop: "1rem", fontSize: "1rem" }}>
                    {data.summaries[0]}
                  </p>
                </div>
              </>
            ) : (
              <Loading />
          )): <p>Get Random Book Recommendations Using Button Below</p>}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "3rem",
          }}
        >
          <button onClick={fetchBookData} className="qr-button">
            {fetched ? "Get a New Book" : "Get a Book"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Book;
