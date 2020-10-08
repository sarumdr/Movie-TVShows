import React, { Component } from "react";
import "./style.css";
import NavBar from "./NavBar";
//import { BrowserRouter as Router,NavLink } from "react-router-dom";


class Home extends Component {
  handleMovie() {
    this.props.history.push({
      pathname: "/movies",
    });
  }
  handleShow(){
    this.props.history.push({
      pathname:'/tv'
    })
  }
  render() {
    //  console.log(this.state.show);

    return (
      <div>
        <NavBar />
        <div className="home_main">
          <p className="home_heading">TVSHOWS APP</p>
          <p className="home_desc">VIEW LATEST MOVIES AND SHOWS</p>
          <button className='btn btn-danger Button' onClick={this.handleMovie.bind(this)}>Movies
                    </button>
                    <button className='btn btn-danger Button' onClick={this.handleShow.bind(this)}>SHOWS</button>

          {/* <NavLink to="/movies">Movies</NavLink>
          <NavLink to="/tv">Shows</NavLink> */}
        </div>
        {/*<Router>*/}
        {/*    <Route path="/" render={() => <List name={this.props.data} />} />*/}
      </div>
    );
  }
}

export default Home;
