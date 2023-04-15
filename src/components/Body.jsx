import React from "react";
import { Container } from "react-bootstrap";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Places from "./Places";
import Home from "./Home";

function Body() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/places" element={<Places />}></Route>
        </Routes>
      </Router>
    </Container>
  );
}

export default Body;
