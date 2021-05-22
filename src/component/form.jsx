import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Header from "./header.jsx";
import "./form.css"



class EmployeeForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            image: null,
            age: "",
            address: "",
            post: "",
            exp: "",

        };
        this.handleChange = this.onChange.bind(this);
        // this.handleImageChange = this.onImageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    onChange = (e) =>
    this.setState({
        [e.target.name]: e.target.value,

    });
    onImageChange = async (e) => {
      this.setState({
        image: e.target.files[0]
      })
    };
    handleSubmit(event){
                let form_data = new FormData();
                form_data.append('name', this.state.name);
                form_data.append('image', this.state.image);
                form_data.append('age', this.state.age);
                form_data.append('address', this.state.address);
                form_data.append('post', this.state.post);
                form_data.append('exp', this.state.exp);
                
                axios.post("http://localhost:8000/",form_data,{
                headers: {'content-type': 'multipart/form-data'},

            }).then(function(response) {
                console.log(response);

                
            }).catch(function(error){
                console.log(error);
                
            });
            event.preventDefault();

    }
    render(){
        return [<Header/>,
            <Container style={{ margin:"10%"}}>
<Form onSubmit={this.handleSubmit}>
  <Row className="space">
    <Col>
      <Form.Control  placeholder="Name" value={this.state.name} onChange={this.onChange} name="name" />
    </Col>
    <Col>
      <Form.Control type="number" placeholder="Age" value={this.state.age} onChange={this.onChange} name="age" />
    </Col>
  </Row>
  <Row className="space">
    <Col>
      <Form.Control placeholder="Address" value={this.state.address} onChange={this.onChange} name="address" />
    </Col>
    <Col>
      <Form.Control type="number" placeholder="Experience in year" value={this.state.exp} onChange={this.onChange} name="exp"/>
    </Col>
  </Row>
  <Form.Group className="space" controlId="exampleForm.SelectCustom" value={this.state.post} onChange={this.onChange} name="post">
    <Form.Control as="select" placeholder="Post">
      <option>System Engineer</option>
      <option>Software Engineer</option>
      <option>Senior Developer</option>
      <option>Backend Developer</option>
      <option>Frountend Developer</option>
      <option>FullStack Developer</option>
    </Form.Control>
  </Form.Group> 
  <Form.Group className="space">
    <Form.File  formEncType="multipart/form-data" type="file" placeholder="Profile Picture"  value={this.state.image} oonImageChange={this.onImageChange} name="image"/>
  </Form.Group>
  <Button type="submit" variant="outline-success">Success</Button>
</Form>
</Container>]
    }
}

export default EmployeeForm;
// Profile Image
// Age
// Address
// POST 
// Experience in year