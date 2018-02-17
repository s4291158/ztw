import React, {Component} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import ResumePage from "../resume/page";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="page-content">
            <Switch>
              <Route exact path="/me" component={ResumePage}/>

              <Route render={() => <Redirect to="/me"/>}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
