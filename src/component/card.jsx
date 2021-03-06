import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Col from 'react-bootstrap/Col';
import "./style.css"


class SingleCard extends React.Component {

    state = {
        details : [],
    }
  
    componentDidMount() {
  
        let data ;
        data = 
        [
            {
            "name":"hello",
            "address":"ward1"
            },
            {
                "name":"hello1",
                "address":"ward2"
            },
            {
                "name":"hello2",
                "address":"ward3"
            },
            {
                "name":"hello3",
                "address":"ward4"
            },
            {
                "name":"hello3",
                "address":"ward4"
            },
            {
                "name":"hello3",
                "address":"ward4"
            },
            {
                "name":"hello3",
                "address":"ward4"
            },
            {
                "name":"hello3",
                "address":"ward4"
            },
            {
                "name":"hello3",
                "address":"ward4"
            },
            {
                "name":"hello3",
                "address":"ward4"
            },
            {
                "name":"hello3",
                "address":"ward4"
            },
            {
                "name":"hello3",
                "address":"ward4"
            },
            {
                "name":"hello3",
                "address":"ward4"
            },
            {
                "name":"hello3",
                "address":"ward4"
            },
            {
                "name":"hello3",
                "address":"ward4"
            },
            {
                "name":"hello3",
                "address":"ward4"
            },
            {
                "name":"hello3",
                "address":"ward4"
            },
            {
                "name":"hello3",
                "address":"ward4"
            },
            {
                "name":"hello3",
                "address":"ward4"
            },
            {
                "name":"hello3",
                "address":"ward4"
            }
        ]
        console.log(data)
        this.setState({
                details : data    
            });
    }
    render() {

        return (<>{this.state.details.map((detail) =>(<Col xs={6} md={4} >
            <Card class="row no-gutters" style={{ margin: '25px' }}>
            <Card.Img  variant="top" src="https://source.unsplash.com/collection/190727/1600x900"/>
            <Card.Body>
                <Card.Title>{ detail.name }</Card.Title>
                <Card.Text>
                     { detail.address }
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card></Col>))}</>)
    }
}
export default SingleCard;

