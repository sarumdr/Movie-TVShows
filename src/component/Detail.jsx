import React, {Component} from "react";
import axios from "axios";


const API_KEY = "ac0283efec6b8411d0ef6be46a722f8c";
let id,type
class Detail extends Component {
state={
  data1:[]
}
   componentWillMount() {
     console.log("called");
    console.log(this.props.id);
    console.log(type);
    // axios
    //   .get(
    //     `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}&language=en-US`
    //   )
    //   .then((response) => {
    //     let data = response && response.data;
    //     console.log(data);
    //     this.setState({
    //       data1: data,
          
    //     });
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // console.log(this.state.data1);
    // //this.componentCall(this);
  }
  
  render() {
    id=this.props.id;
    type=this.props.type;
    console.log(id);
    return (
        <div>
          <h1>{this.props.type}</h1>
          {/* <div className="result-card">
            <div className="poster-wrapper">

              {data? (
                    <div>

                        <h3 className="info">
                            data.title
                        </h3>
                  <img className="card-img-top image"
                       alt="..."
                       src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                  />
                    </div>
              ) : (
                  <div className="card-header">
                    <h3 className="info">{this.props.title}</h3>
                  </div>
              )
              }
            </div>
          </div> */}

        </div>
    )
  }
}
export default Detail
