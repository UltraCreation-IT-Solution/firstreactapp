
import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Slider from "react-slick";
import "./style.css"



export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
    };
    return (
      <>
        <Slider {...settings}>
          <div><Card className="slidercard"><Card.Img  variant="top" src="https://source.unsplash.com/collection/190727/1600x900"/></Card></div>
          <div><Card className="slidercard"><Card.Img  variant="top" src="https://source.unsplash.com/collection/190727/1600x900"/></Card></div>
          <div><Card className="slidercard"><Card.Img  variant="top" src="https://source.unsplash.com/collection/190727/1600x900"/></Card></div>
          <div><Card className="slidercard"><Card.Img  variant="top" src="https://source.unsplash.com/collection/190727/1600x900"/></Card></div>
          <div><Card className="slidercard"><Card.Img  variant="top" src="https://source.unsplash.com/collection/190727/1600x900"/></Card></div>
          <div><Card className="slidercard"><Card.Img  variant="top" src="https://source.unsplash.com/collection/190727/1600x900"/></Card></div>
          <div><Card className="slidercard"><Card.Img  variant="top" src="https://source.unsplash.com/collection/190727/1600x900"/></Card></div>
          <div><Card className="slidercard"><Card.Img  variant="top" src="https://source.unsplash.com/collection/190727/1600x900"/></Card></div>
          <div><Card className="slidercard"><Card.Img  variant="top" src="https://source.unsplash.com/collection/190727/1600x900"/></Card></div>
          <div><Card className="slidercard"><Card.Img  variant="top" src="https://source.unsplash.com/collection/190727/1600x900"/></Card></div>
          <div><Card className="slidercard"><Card.Img  variant="top" src="https://source.unsplash.com/collection/190727/1600x900"/></Card></div>
          <div><Card className="slidercard"><Card.Img  variant="top" src="https://source.unsplash.com/collection/190727/1600x900"/></Card></div>
          <div><Card className="slidercard"><Card.Img  variant="top" src="https://source.unsplash.com/collection/190727/1600x900"/></Card></div>
          <div><Card className="slidercard"><Card.Img  variant="top" src="https://source.unsplash.com/collection/190727/1600x900"/></Card></div>
          <div><Card className="slidercard"><Card.Img  variant="top" src="https://source.unsplash.com/collection/190727/1600x900"/></Card></div>
          <div><Card className="slidercard"><Card.Img  variant="top" src="https://source.unsplash.com/collection/190727/1600x900"/></Card></div>
          <div><Card className="slidercard"><Card.Img  variant="top" src="https://source.unsplash.com/collection/190727/1600x900"/></Card></div>
          <div><Card className="slidercard"><Card.Img  variant="top" src="https://source.unsplash.com/collection/190727/1600x900"/></Card></div>
          <div><Card className="slidercard"><Card.Img  variant="top" src="https://source.unsplash.com/collection/190727/1600x900"/></Card></div>
          <div><Card className="slidercard"><Card.Img  variant="top" src="https://source.unsplash.com/collection/190727/1600x900"/></Card></div>
          <div><Card className="slidercard"><Card.Img  variant="top" src="https://source.unsplash.com/collection/190727/1600x900"/></Card></div>
          <div><Card className="slidercard"><Card.Img  variant="top" src="https://source.unsplash.com/collection/190727/1600x900"/></Card></div>
          <div><Card className="slidercard"><Card.Img  variant="top" src="https://source.unsplash.com/collection/190727/1600x900"/></Card></div>
          <div><Card className="slidercard"><Card.Img  variant="top" src="https://source.unsplash.com/collection/190727/1600x900"/></Card></div>
          <div><Card className="slidercard"><Card.Img  variant="top" src="https://source.unsplash.com/collection/190727/1600x900"/></Card></div>
          <div><Card className="slidercard"><Card.Img  variant="top" src="https://source.unsplash.com/collection/190727/1600x900"/></Card></div>
          <div><Card className="slidercard"><Card.Img  variant="top" src="https://source.unsplash.com/collection/190727/1600x900"/></Card></div>
          <div><Card className="slidercard"><Card.Img  variant="top" src="https://source.unsplash.com/collection/190727/1600x900"/></Card></div>
          <div><Card className="slidercard"><Card.Img  variant="top" src="https://source.unsplash.com/collection/190727/1600x900"/></Card></div>
          <div><Card className="slidercard"><Card.Img  variant="top" src="https://source.unsplash.com/collection/190727/1600x900"/></Card></div>


        </Slider>
      </>
    );
  }
}