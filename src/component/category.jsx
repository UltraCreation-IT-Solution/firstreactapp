import React from 'react';
import Carousel from 'react-bootstrap/carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';

// import axios from 'axios';
import "./style.css"

class CategotySlider extends React.Component {

    state = {
        details: [],
    }

    componentDidMount() {

        let data;
        data =
            [
                {
                    "name": "hello",
                    "address": "ward1"
                },
                {
                    "name": "hello1",
                    "address": "ward2"
                },
                {
                    "name": "hello2",
                    "address": "ward3"
                },
                {
                    "name": "hello3",
                    "address": "ward4"
                },
                {
                    "name": "hello3",
                    "address": "ward4"
                },
                {
                    "name": "hello3",
                    "address": "ward4"
                },
                {
                    "name": "hello3",
                    "address": "ward4"
                },
                {
                    "name": "hello3",
                    "address": "ward4"
                },
                {
                    "name": "hello3",
                    "address": "ward4"
                },
                {
                    "name": "hello3",
                    "address": "ward4"
                },
                {
                    "name": "hello3",
                    "address": "ward4"
                },
                {
                    "name": "hello3",
                    "address": "ward4"
                },
                {
                    "name": "hello3",
                    "address": "ward4"
                },
                {
                    "name": "hello3",
                    "address": "ward4"
                },
                {
                    "name": "hello3",
                    "address": "ward4"
                },
                {
                    "name": "hello3",
                    "address": "ward4"
                },
                {
                    "name": "hello3",
                    "address": "ward4"
                },
                {
                    "name": "hello3",
                    "address": "ward4"
                },
                {
                    "name": "hello3",
                    "address": "ward4"
                },
                {
                    "name": "hello3",
                    "address": "ward4"
                }
            ]
        console.log(data)
        this.setState({
            details: data
        });
    }
    render() {

        return (<><Carousel>{this.state.details.map((detail) => (<Carousel.Item>
            <div class="row" style={{marginTop:"6%"}}>
                <div class="col-md-4">
                    <div class="card mb-2">
                        <Card class="row no-gutters" style={{ margin: '25px' }}>
                            <Card.Img variant="top" src="https://source.unsplash.com/collection/190727/1600x900" />
                        </Card>
                    </div>
                </div>
            </div>
        </Carousel.Item>))}</Carousel></>)
    }
}





export default CategotySlider;
