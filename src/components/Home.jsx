import React, { Component } from "react";
import Connection from "./Connection";
import Teleoperation from "./Teleoperation";
import { Row, Col, Container } from "react-bootstrap";
import RobotState from "./RobotState";
import Map from "./Map";
import Camera from "./Camera";
import { Color } from "three";
import TeleopKey from "./TeleopKey";
import Battery from "./Battery";
import SelectColor from "./SelectColor";
import PlaceForm from "./PlaceForm";

function Home() {
  return (
    <div>
      <Container>
        <div className="text-box">
          <h1 className="text-center mt-3">Robot Control Page</h1>
        </div>
        <Row>
          <Col>
            <Connection />
          </Col>
        </Row>
        <Row>
          <Col>
            <Teleoperation />
          </Col>
          <Col>
            <h4 className="text-white">Map Viewer</h4>
          </Col>
          <Col>
            <h4 className="text-white">Camera Feed</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <RobotState />
          </Col>
          <Col>
            <Map />
          </Col>
          <Col>
            <Camera />
          </Col>
        </Row>
        <Row>
          <Col>
            <SelectColor />
          </Col>
          <Col>
            <Battery />
          </Col>
        </Row>
        <Row>
          <PlaceForm/>
        </Row>
        <div>
          <TeleopKey />
        </div>
      </Container>
    </div>
  );
}

export default Home;
