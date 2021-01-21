import React from "react";
import "../styling/home.css";
import { Button, Col, Row } from "reactstrap";
function Home() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {/* <h1>Welcome to PlayerJamz!</h1>
      <h2>Play along with the hottest live band videos</h2>
      <h2>TRY IT OUT FREE!</h2> */}
      <div style={{ margin: "40px" }}>
        {/* <a className="btn btn-danger btn-lg learnbtn" href="#" role="button">
          Learn more
        </a> */}
      </div>
      {/* <Row>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <iframe
            className="shadow-lg p-1 mb-1 bg-danger rounded"
            width="560"
            height="315"
            src="https://youtube.com/embed/F1LIhKhY7tI"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h2>Play along ROCK JAMZ</h2>
        </Col>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <iframe
            className="shadow-lg p-1 mb-1 bg-danger rounded"
            width="560"
            height="315"
            src="https://youtube.com/embed/D9ZvOfJ3YlQ"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h2>Deep FUNK play alongs</h2>
        </Col>
      </Row> */}
    </div>
  );
}
export default Home;
