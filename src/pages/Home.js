import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Card, CardGroup } from "react-bootstrap";
import '../styles/styles.css'
import heroImg from '../images/hero_img.png'
import engineFix from '../images/engine-fix.jpg'
import brokenGlass from '../images/broken_glass.jpg'
import waterPipe from '../images/pipe-repair.jpg'
import garden from '../images/dirty-garden.jpg'
import roof from '../images/fix-roof.jpg'
import ac from '../images/ac-service.jpg'


function Home() {
    return (<div>
        <Container fluid className="hero noPadding">
            <Row>
                <Col className="hero-text">
                    <div className="hero-text-box">
                        <div className="highlight-txt-lg">
                            <h1>BID YOUR TASKS</h1>
                        </div>
                        <div className="highlight-txt-sm">
                            <h3>Fast, Responsive, Quality Service</h3>
                        </div>
                        <div className="call-us-btn">
                            <Button variant="outline-light" className="call-btn">+ CALL US: 0000-00-0000</Button>{' '}
                        </div>
                    </div>
                </Col>
                <Col className="hero-image">
                    <img src={heroImg} alt="hero_image"></img>
                </Col>
            </Row>
        </Container>
        <Container>
            <Row className="recent mt-3 mb-3"><h1>Recent Tasks</h1></Row>
            <Row>
                <CardGroup>
                    <Card className="m-2">
                        <Card.Img variant="top" src={engineFix} />
                        <Card.Body>
                            <Card.Title>Fix car engine</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet. Quo sint asperiores ex vero eius ut vero alias aut voluptate incidunt At maiores suscipit est Quis quibusdam id aliquam voluptate.
                                At odio impedit qui vitae soluta non porro omnis et atque explicabo aut rerum sint rem neque maiores sed consequatur placeat?
                            </Card.Text>
                            <Button variant="primary">Contact Bidder</Button>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Task posted 4 days ago</small>
                        </Card.Footer>
                    </Card>
                    <Card className="m-2">
                        <Card.Img variant="top" src={brokenGlass} />
                        <Card.Body>
                            <Card.Title>Change broken glass</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet. Quo sint asperiores ex vero eius ut vero alias aut voluptate incidunt At maiores suscipit est Quis quibusdam id aliquam voluptate.
                                At odio impedit qui vitae soluta non porro omnis et atque explicabo aut rerum sint rem neque maiores sed consequatur placeat?
                            </Card.Text>
                            <Button variant="primary">Contact Bidder</Button>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Task posted 2 days ago</small>
                        </Card.Footer>
                    </Card>
                    <Card className="m-2">
                        <Card.Img variant="top" src={waterPipe} />
                        <Card.Body>
                            <Card.Title>Fix leaking waterpipe</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet. Quo sint asperiores ex vero eius ut vero alias aut voluptate incidunt At maiores suscipit est Quis quibusdam id aliquam voluptate.
                                At odio impedit qui vitae soluta non porro omnis et atque explicabo aut rerum sint rem neque maiores sed consequatur placeat?
                            </Card.Text>
                            <Button variant="primary">Contact Bidder</Button>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Task posted 6 hours ago</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </Row>
            <Row>
                <CardGroup>
                    <Card className="m-2">
                        <Card.Img variant="top" src={roof} />
                        <Card.Body>
                            <Card.Title>Fix home roof</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet. Quo sint asperiores ex vero eius ut vero alias aut voluptate incidunt At maiores suscipit est Quis quibusdam id aliquam voluptate.
                                At odio impedit qui vitae soluta non porro omnis et atque explicabo aut rerum sint rem neque maiores sed consequatur placeat?
                            </Card.Text>
                            <Button variant="primary">Contact Bidder</Button>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Task posted 2 days ago</small>
                        </Card.Footer>
                    </Card>
                    <Card className="m-2">
                        <Card.Img variant="top" src={garden} />
                        <Card.Body>
                            <Card.Title>Clean messy garden</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet. Quo sint asperiores ex vero eius ut vero alias aut voluptate incidunt At maiores suscipit est Quis quibusdam id aliquam voluptate.
                                At odio impedit qui vitae soluta non porro omnis et atque explicabo aut rerum sint rem neque maiores sed consequatur placeat?
                            </Card.Text>
                            <Button variant="primary">Contact Bidder</Button>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Task posted 6 days ago</small>
                        </Card.Footer>
                    </Card>
                    <Card className="m-2">
                        <Card.Img variant="top" src={ac} />
                        <Card.Body>
                            <Card.Title>Service and clean Air Conditioner</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet. Quo sint asperiores ex vero eius ut vero alias aut voluptate incidunt At maiores suscipit est Quis quibusdam id aliquam voluptate.
                                At odio impedit qui vitae soluta non porro omnis et atque explicabo aut rerum sint rem neque maiores sed consequatur placeat?
                            </Card.Text>
                            <Button variant="primary">Contact Bidder</Button>
                        </Card.Body>
                        <Card.Footer>
                            <Col>
                                <small className="text-muted">Task posted 2 days ago</small>
                            </Col>

                        </Card.Footer>
                    </Card>
                </CardGroup>
            </Row>
        </Container>
    </div>);
}

export default Home;