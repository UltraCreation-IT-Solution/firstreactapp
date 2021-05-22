import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Header from "./header.jsx";
import "./form.css"


class SingleCard extends React.Component {

    state = {
        details : [],
    }
  
    componentDidMount() {
  
        let data ;
  
        axios.get('http://localhost:8000/list/')  
        .then(res => {
            data = res.data;
            console.log(data)
            this.setState({
                details : data    
            });
        })
        .catch(err => {})
    }
    render() {

        return (<>{this.state.details.map((detail) =>(<Col xs={6} md={4} ><Card style={{ margin: '25px' }}>
            <Card.Img variant="top" src={detail.image}/>
            <Card.Body>
                <Card.Title>{detail.name}</Card.Title>
                <Card.Text>
                    {detail.address}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card></Col>))}</>)
    }
}



class WebCard extends React.Component {
    render() {
        return[<Header/>,<Container className="spacecard">
            <Row>
                <SingleCard />
            </Row>
        </Container>]
    }
}
export default WebCard;


