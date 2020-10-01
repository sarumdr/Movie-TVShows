import React, {Component} from "react";
import axios from "axios";


const API_KEY = "ac0283efec6b8411d0ef6be46a722f8c";

class Detail extends Component {
state={
  data1:[],
  id:"",
  type:""
}
   componentDidMount() {
     console.log("called");
      let id=this.state.id;
     console.log(this.props.id);
     console.log(this.state.type);
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
    //console.log(this.state.id);
      //
      //  let gen=datas.genres;
      //  console.log(datas.genres);
      // // let genre= gen.map(genre=>{
      // //     return(
      // //         <button>{genre.name}</button>
      // //     )
      // //  })

      return (
          <div>
              {datas.poster_path ? (

                  <img
                      className="card-img-top image"
                      alt="..."
                      src={`https://image.tmdb.org/t/p/w500${datas.poster_path}`}
                  />
              ) : (
                  <div className="card-header">

                  </div>
              )}

              {type === "movie" ? (
                      <h3 className="info">{datas.title}</h3>
                  ) :
                  (
                      <h3 className="info">{datas.name}</h3>
                  )}
              <button>{release_date}</button>

              <h3>{datas.overview}</h3>
              {/*{genre}*/}
          </div>

      )
  }
}
export default Detail
