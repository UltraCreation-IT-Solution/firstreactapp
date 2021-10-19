import React from "react";
import ReactDom from "react-dom";
import App from "./App.js";
import EmployeeForm from "./component/form.jsx"
import { BrowserRouter,Route,Switch } from "react-router-dom"
import MultipleItems from "./component/slider.jsx";
class Routing extends React.Component {
  render() {
     return (
        <>
           <Switch>
              <Route exact path="/" component={App}></Route>
              <Route exact path="/form" component={EmployeeForm}></Route>
              <Route exact path= "/slide" component={MultipleItems}></Route>
           </Switch>


        </>
     );
  }
}
ReactDom.render(<BrowserRouter><Routing/></BrowserRouter>
, 
document.getElementById('root'));