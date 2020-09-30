import React, { Component } from "react";
import axios from "axios";

import List from "./List";
let api_key = "ac0283efec6b8411d0ef6be46a722f8c";
class Show extends Component {
  state = {
    data: [],
    show: false,
  };

  componentDidMount() {
    axios
      .get(`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}`)
      .then((response) => {
        let data = response && response.data;
        //s  console.log(data)
        this.setState({
          data: data.results,
          show: true,
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    //console.log(this.state.data);
  }

  render() {
    //console.log("tv ")
    return (
      <div>
        <List datas={this.state.data} type={"tv"} />
      </div>
    );
  }
}

export default Show;
