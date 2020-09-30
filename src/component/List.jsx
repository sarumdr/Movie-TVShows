import React, { Component } from "react";
import "../component/style.css";
import Detail from "./Detail";
import Search from "./search";

class List extends Component {
  state = {
    data1: [],
    type:"",
    id:"",
    show: false,
  };
 
  // componentCall() {
  //   console.log("Component call")
  //   this.props.history.push({
  //     pathname: "/details",
  //   });
  // }
  //fun() {
  //   this.props.history.push("/");
  // }
  handleClick(id,type){
    console.log("list")
    this.setState({
      id:id,
      type:type
    })
  }
  
  render() {
    let list = this.props.datas.map((data, index) => {
      let id = data.id;
      //console.log(data);
      return (
        <div className="container">
          <div className="card">
            <img
              className="card-img-top image"
              alt="..."
              //onClick={this.fun.bind(this)}
               onClick={this.handleClick.bind(this,id,this.props.type)}
              src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
            />
          </div>
        </div>
      );
    });
    return (
      <div>
      {/* // <Switch>
      // <div>
      // <Route exact path='/test' component={()=><Test name="hello"/>}/>
      //   <Route exact path='/details' render={() => <Detail datas="detail"/>}/>
      //   <Search />
       
      // </Switch> */}
      <Search/>
        {list}
        <Detail id={this.state.id}
                type={this.state.type}/>

      </div>
    );
  }
}

export default List;
//export default withRouter (List);