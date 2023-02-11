import React from "react"; //Broadcasting and reacting to changes of state.

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css"; //TODO: more global place for this?
import RideDate from "./RideDate";
import Card from "../UI/Card";
import "./RideItem.css";

//function RideItem(props) {  // React convention, with passing in object properties.
const RideItem = (props) => {
  //return <div><div>Date</div><div>Title</div></div>; //Can only have a single, top <div> (root element).

  return (
    // Arranging the following widgets in a single Card.
    //TODO: display of Date is all jacked up.
    <Card className="ride-item">
      <Row>
        <Col xs={3}>
          <RideDate date={props.date} />
        </Col>
        <Col xs={6}>
          <div className="ride-item__description">
            <h2>{props.title}</h2>
          </div>
        </Col>
        <Col xs={3}>
          <div className="ride-item__distance">{props.distance} miles</div>
        </Col>
      </Row>
    </Card>
  );
};

export default RideItem;
