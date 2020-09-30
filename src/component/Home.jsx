//eslint-disable-next-line

import React, { Component } from "react";
import axios from "axios";
import "./style.css";
import NavBar from "./NavBar";
import List from "./List";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
let api_key = "ac0283efec6b8411d0ef6be46a722f8c";


class Home extends Component {
  handleClick() {
    this.props.history.push({
      pathname: "/movies",
    });
  }
  //
  render() {
    //  console.log(this.state.show);

    return (
      <div>
        <NavBar />
        <div className="home_main">
          <p className="home_heading">TVSHOWS APP</p>
          <p className="home_desc">VIEW LATEST MOVIES AND SHOWS</p>
          {/* <button className='btn btn-danger Button'>Movies
                    </button>
                    <button className='btn btn-danger Button'>SHOWS</button> */}

          <NavLink to="/movies">Movies</NavLink>
          <NavLink to="/tv">Shows</NavLink>
        </div>
        {/*<Router>*/}
        {/*    <Route path="/" render={() => <List name={this.props.data} />} />*/}
      </div>
    );
  }
}

export default Home;
