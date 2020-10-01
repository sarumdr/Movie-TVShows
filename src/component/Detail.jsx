import React, {Component} from "react";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Media from "react-bootstrap/Media";

import axios from "axios";
import '../component/style.css'

const API_KEY = "ac0283efec6b8411d0ef6be46a722f8c";

class Detail extends Component {
    id = this.props.match.params.id;
    state = {
        data1: [],
        id: "",
        type: "",
    };

    componentDidMount() {
        console.log('details', this.id);
        console.log('data', this.props.location.state.details);
        let id = this.id;
        let type = this.props.location.state.type;
        axios
            .get(
                `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}&language=en-US`
            )
            .then((response) => {
                let data = response && response.data;
                console.log(data);
                this.setState({
                    data1: data,
                    type: type
                });
            })
            .catch(function (error) {
                console.log(error);
            });
        console.log(this.state.data1);
    }


    render() {

        let datas = this.state.data1;
        let type=this.state.type;
        console.log(datas);
        console.log(type);
         let d = new Date(datas.release_date);
         let release_date = d.getFullYear();
        return (
            // <div>
            //     <h1>Hello</h1>
            // </div>
            <Container>
                <Row>
                    <Col xl={6}>
                    {datas.poster_path ? (

                    <img
                        className="card-img-top image"
                        alt="..."
                        src={`https://image.tmdb.org/t/p/w500${datas.poster_path}`}
                    />
                ) : (
                    <div className="card-header">
                        <h3 className="info">No poster</h3>
                    </div>
                )}
                    </Col>
                <Col xl={6}>
                {this.props.type === "movie"? (
                            <h3 className="info">{datas.title}</h3>
                        ):
                        (
                            <h3 className="info">{datas.name}</h3>
                        )}
                    <button>{release_date}</button>

                    <h3>{datas.overview}</h3>
                    {/*{genre}*/}

                </Col>
            </Row>
            </Container>

        );
    }
}

export default Detail;
