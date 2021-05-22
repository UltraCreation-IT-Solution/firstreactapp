import React from "react";
import ReactDom from "react-dom";
import WebCard from "./component/card.jsx";
import EmployeeForm from "./component/form.jsx"
import { BrowserRouter,Route,Switch } from "react-router-dom"

class App extends React.Component {
  render() {
     return (
        <>
           <Switch>
              <Route exact path="/" component={WebCard}></Route>
              <Route exact path="/form" component={EmployeeForm}></Route>
           </Switch>


        </>
     );
  }
}
ReactDom.render(<BrowserRouter><App/></BrowserRouter>
, 
document.getElementById('root'));