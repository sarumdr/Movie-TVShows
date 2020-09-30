import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./component/NavBar";
import Home from "./component/Home";
import List from "./component/List";
import Movie from "./component/Movies";
import Show from "./component/TV";
import Search from "./component/search";
import Detail from "./component/Detail";
import Test from "./component/Test";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/test' render={()=><Detail name="test"/>}/>
          <Route exact path="/" component={Home} />
          <Route path="/list" component={List} />
          <Route path="/movies" component={Movie} />
          <Route path="/tv" component={Show} />
          <Route path="/search" component={Search} />
          <Route path='/details' component={Detail}/>
        </div>
      </Router>
    );
  }
}

export default App;
