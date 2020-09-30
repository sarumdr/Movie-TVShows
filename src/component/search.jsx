import React, { Component } from "react";
import axios from "axios";
import ResultCard from "./ResultCard";

let api_key = "ac0283efec6b8411d0ef6be46a722f8c";
class Search extends Component {
  state = {
    query: "",
    data: [],
  };

  handleChange(e) {
    e.preventDefault();
    console.log(e.target);
    this.setState({
      query: e.target.value,
    });
    //console.log(this.state.query)
    let query = this.state.query;
    console.log(query);
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&include_adult=false&query=${query}`
      )
      .then((response) => {
        let data = response && response.data;
        //console.log(data)
        this.setState({
          data: data.results,
          show: true,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    // console.log(this.state.data)
    return (
      <div className="container">
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Search for a movie"
            onChange={this.handleChange.bind(this)}
          />
        </div>
        {this.state.data.length > 0 && (
          <ul className="results">
            {this.state.data.map((result) => {
              return (
                <li key={result.id}>
                  <ResultCard movie={this.state.data} />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default Search;
