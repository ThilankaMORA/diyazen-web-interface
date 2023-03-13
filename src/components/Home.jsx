import React, { Component } from "react";
import Connection from "./Connection";
import Teleoperation from "./Teleoperation";
import { Row, Col, Container } from "react-bootstrap";
import RobotState from "./RobotState";
import Map from "./Map";
import Camera from "./Camera";
import { Color } from "three";

class Home extends Component {
  state = {};

  render() {
    return (
      <div>
        <Container>
          <div className="text-box"><h1 className="text-center mt-3">Robot Control Page</h1></div>
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
              <RobotState/>
            </Col>
            <Col>
              <Map />
            </Col>
            <Col>
              <Camera />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;