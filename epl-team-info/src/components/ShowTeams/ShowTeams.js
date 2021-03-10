import React from "react";
import "./ShowTeams.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const ShowTeams = (props) => {
  const { teams } = props.teamList;

  // for rendering cards
  const renderCard = (cardInfo) => {
    return (
      <Card style={{ width: "16rem" }}>
        <Card.Img
          className="img-thumbnail"
          variant="top"
          src={cardInfo.strTeamBadge}
        />
        <Card.Body>
          <Card.Title>{cardInfo.strTeam}</Card.Title>
          <Button variant="primary">Explore</Button>
        </Card.Body>
      </Card>
    );
  };

  return (
    <div>
      <Container className="container-fluid">
        <Row lg={4}>
          {teams.map((team) => (
            <Col className="ms-1 mt-2">{renderCard(team)}</Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ShowTeams;
