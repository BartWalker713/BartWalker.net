import React from "react";
import "../styling/home.css";
import { Button, Col, Row } from "reactstrap";
function Media() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1 style={{ marginTop: "50px" }}>
        FINALLY learning by <font color="red">DOING</font> in a system that is{" "}
        <font color="red">FUN!</font>
      </h1>
      <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>
        Take a look how it works
      </h2>
      <Row>
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
            src="https://www.youtube.com/embed/goBXQEdeZ88"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h2>Chickin Pickin</h2>
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
            src="https://www.youtube.com/embed/goBXQEdeZ88"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h2>Modal Rock</h2>
        </Col>
      </Row>
      <Row>
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
            src="https://www.youtube.com/embed/goBXQEdeZ88"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h2>Funk Riffs</h2>
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
            src="https://www.youtube.com/embed/goBXQEdeZ88"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h2>Bebop</h2>
        </Col>
      </Row>
    </div>
  );
}
export default Media;
