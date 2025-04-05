import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";

const firstName = "warren kim"; // Change this to "" to test the alternate message

function App() {
  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      <Card style={{ width: "22rem", borderRadius: "15px", boxShadow: "0px 4px 12px rgba(0,0,0,0.2)" }}>
        <Card.Body className="text-center">
          <Image />
          <Card.Title className="mt-3">
            <Name />
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <Price />
          </Card.Subtitle>
          <Card.Text>
            <Description />
          </Card.Text>
        </Card.Body>
      </Card>

      <div className="text-center mt-4">
        <h3>{firstName ? `Hello, ${firstName}!` : "Hello, there!"}</h3>
        {firstName && (
          <img
            src="https://i.pravatar.cc/100"
            alt="User Avatar"
            style={{ borderRadius: "50%", marginTop: "10px" }}
          />
        )}
      </div>
    </Container>
  );
}

export default App;
