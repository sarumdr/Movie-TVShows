import React, { Component } from "react";
import "../component/style.css";
import Detail from "./Detail";
import Search from "./search";
import { withRouter, BrowserRouter as Link } from "react-router-dom";
import axios from "axios";

const API_KEY = "ac0283efec6b8411d0ef6be46a722f8c";

class List extends Component {
  state = {
    data1: [],
    type:"",
    show: false,
  };

  handleClick(id, type,data) {
    console.log(id);
    console.log(type);
    this.props.history.push({
      pathname: `/details/${id}`,
      state:{
        details:data,
        type:type
      }
    });
    // axios
    //   .get(
    //     `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}&language=en-US,adult=false`
    //   )
    //   .then((response) => {
    //     let data = response && response.data;
    //     console.log(data);
    //     this.setState({
    //       data1: data,
    //       type:type,
    //       show: true,
    //     });
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // console.log(this.state.data1);
    // //this.componentCall(this);
  }
  // componentCall() {
  //   console.log("Component call")
  //   this.props.history.push({
  //     pathname: "/details",
  //   });
  // }
  //fun() {
  //   this.props.history.push("/");
  // }

  render() {
    console.log(this.state.type)
    let list = this.props.datas.map((data, index) => {
      let id = data.id;
     // console.log(data);
      return (
        <div className="container">
          <div className="card">
            <img
              className="card-img-top image"
              alt="..."
              //onClick={this.fun.bind(this)}
              onClick={this.handleClick.bind(this, id, this.props.type,data)}
              src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
            />
          </div>
        </div>
      );
    });
    console.log(this.state);

    return (
      <div>
        <Search />
        {/* {this.state.show===false && {list}}  */}

        {/*<Link to="/details">*/}
        {/*  <Detail datas={this.state.data1} type={this.state.type} />*/}
        {/*</Link>*/}
        {list}
      </div>
    );
  }
}

//export default List;
export default withRouter(List);
