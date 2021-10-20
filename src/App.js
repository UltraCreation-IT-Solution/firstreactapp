import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


// import axios from 'axios';
import Header from './component/header';
import "./component/style.css"
import SingleCard from './component/card.jsx';
import MultipleItems from './component/slider.jsx';




class App extends React.Component {
    render() {
        return[<Header/>,<Container className="spacecard"><Row><MultipleItems/></Row>
            <Row>
                <SingleCard />
            </Row>
        </Container>]
    }
}
export default App;


