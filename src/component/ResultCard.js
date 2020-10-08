import React, {Component} from "react";
import axios from "axios";
import {withRouter} from "react-router-dom";
import '../component/style.css'
import NavBar from "./NavBar";

let api_key = "ac0283efec6b8411d0ef6be46a722f8c";

class ResultCard extends Component {
    state = {
        data: [],
        type: "",
    };

    componentDidMount() {
        let query = this.props.location.state.query;
        let type = this.props.location.state.type;
        console.log("result", type);
        axios
            .get(
                `https://api.themoviedb.org/3/search/${type}?api_key=${api_key}&include_adult=false&query=${query}`
            )
            .then((response) => {
                let data = response && response.data;
                console.log("fetch", data);
                this.setState({
                    data: data.results,
                    type: type,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleClick(id, type) {
        console.log(id);
        console.log("clicked");
        type = this.state.type;
        console.log("type", type);
        this.props.history.push({
            pathname: `/details/${id}`,
            state: {
                type: type,
            },
        });
    }

    render() {
        // console.log(this.props.movie.poster_path)
        console.log("render", this.state.data);
        let type = this.state.type;
        // console.log('type',type)
        let detail = this.state.data.map((movie, index) => {
            let id = movie.id;
            console.log(id);

            return (

                <div className="col-lg-2 col-md-3 col-sm-6 result">
                    {movie.poster_path ? (
                        <img
                            className="image"
                            alt="..."
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            onClick={this.handleClick.bind(this, id)}
                        />
                    ) : (
                        <div className="info">
                            <h3 className="info">{this.props.title}</h3>
                        </div>
                    )}
                </div>

            );
        });

        return (
            <div>
                <NavBar/>
                <div className="row results">
                    {detail}</div>
            </div>);
    }
}

export default withRouter(ResultCard);
