import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import axios from 'axios';
import "./style.css"



class CategorySlider extends React.Component {

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
        return<>
        
        </>

    }
}





export default CategorySlider;
