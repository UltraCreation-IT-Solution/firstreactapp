
import React, { Component } from "react";
import Slider from "react-slick";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>

          <Col xs={6} md={4} >
            <Card class="row no-gutters" style={{ margin: '25px' }}>
              <Card.Img variant="top" src="https://source.unsplash.com/collection/190727/1600x900" />
              <Card.Body>
                <Card.Title>hello</Card.Title>
                <Card.Text>
                  hey
                </Card.Text>

              </Card.Body>
            </Card></Col>
          <Col xs={6} md={4} >
            <Card class="row no-gutters" style={{ margin: '25px' }}>
              <Card.Img variant="top" src="https://source.unsplash.com/collection/190727/1600x900" />
              <Card.Body>
                <Card.Title>hello</Card.Title>
                <Card.Text>
                  hey
                </Card.Text>

              </Card.Body>
            </Card></Col>
          <Col xs={6} md={4} >
            <Card class="row no-gutters" style={{ margin: '25px' }}>
              <Card.Img variant="top" src="https://source.unsplash.com/collection/190727/1600x900" />
              <Card.Body>
                <Card.Title>hello</Card.Title>
                <Card.Text>
                  hey
                </Card.Text>

              </Card.Body>
            </Card></Col>
          <Col xs={6} md={4} >
            <Card class="row no-gutters" style={{ margin: '25px' }}>
              <Card.Img variant="top" src="https://source.unsplash.com/collection/190727/1600x900" />
              <Card.Body>
                <Card.Title>hello</Card.Title>
                <Card.Text>
                  hey
                </Card.Text>

              </Card.Body>
            </Card></Col>
          <Col xs={6} md={4} >
            <Card class="row no-gutters" style={{ margin: '25px' }}>
              <Card.Img variant="top" src="https://source.unsplash.com/collection/190727/1600x900" />
              <Card.Body>
                <Card.Title>hello</Card.Title>
                <Card.Text>
                  hey
                </Card.Text>

              </Card.Body>
            </Card></Col>
          <Col xs={6} md={4} >
            <Card class="row no-gutters" style={{ margin: '25px' }}>
              <Card.Img variant="top" src="https://source.unsplash.com/collection/190727/1600x900" />
              <Card.Body>
                <Card.Title>hello</Card.Title>
                <Card.Text>
                  hey
                </Card.Text>

              </Card.Body>
            </Card></Col>
          <Col xs={6} md={4} >
            <Card class="row no-gutters" style={{ margin: '25px' }}>
              <Card.Img variant="top" src="https://source.unsplash.com/collection/190727/1600x900" />
              <Card.Body>
                <Card.Title>hello</Card.Title>
                <Card.Text>
                  hey
                </Card.Text>

              </Card.Body>
            </Card></Col>

        </Slider>
      </div>
    );
  }
}