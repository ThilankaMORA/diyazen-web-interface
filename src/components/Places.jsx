import React from "react";
import { Row, Col } from "react-bootstrap";
import PlaceForm from "./PlaceForm";
import PlaceList from "./PlaceList";
import Map from "./Map";
import Teleoperation from "./Teleoperation";
import TeleopKey from "./TeleopKey";

function Places() {
  return (
    <div>
      <Row>
        <Col>
          <h4 id="navigation">Location navigation</h4>
        </Col>
        <Col>
          <PlaceForm />
        </Col>
      </Row>
      <Row>
        <Col>
        <Map/>
        </Col>
        <Col>
          <PlaceList />
        </Col>
      </Row>
      <Teleoperation/>
      <TeleopKey/>
    </div>
  );
}

export default Places;
