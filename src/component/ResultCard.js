import React, {Component} from "react";

class ResultCard extends Component {
    render() {
        console.log(this.props.movie.poster_path)
        let detail=this.props.movie.map((movie, index) => {
            return (

                <div className="result-card">
                    <div className="poster-wrapper">


                        {movie.poster_path? (

                            <img className="card-img-top image"
                                 alt="..."
                                 src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            />
                        ) : (
                            <div className="card-header">
                                <h3 className="info">{this.props.title}</h3>
                            </div>
                        )
                        }
                    </div>
                </div>
            )
        })

            return (
            <div>
                {detail}
            </div>
        )
    }
}
    export default ResultCard
