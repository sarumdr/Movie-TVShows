import React, {Component} from "react";
import '../component/style.css'

import axios from "axios";
import '../component/style.css'
import NavBar from "./NavBar";

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
        console.log('data', this.props.location.state.type);
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
         console.log('realease',release_date)
         let air_date=new Date(datas.first_air_date);
         let first_air_date=air_date.getFullYear();
         console.log(first_air_date);
         console.log(datas.homepage);
         // let genres=datas.genres.map(genre=>{
         //     return <button>genre.name</button>
         // })
        let original_title=datas.original_title;
         return (
                <div>
                <NavBar/>
                <div className={'row detail'}>
                    <div className={'col-lg-3'}>
                    {datas.poster_path ? (

                    <img
                        className="detailimage"
                        alt="..."
                        src={`https://image.tmdb.org/t/p/w500${datas.poster_path}`}
                    />
                ) : (
                    <div className="header-info">
                        <h3 className="info">No poster</h3>
                    </div>
                )}
                    </div>
                <div className={'col-lg-6 details'}>
                {type === 'movie' && (
                            <div>
                            <h3 className="info">{datas.title}</h3>
                            <button className={'detailbtn'}>{release_date}</button>
                                {/*{genres}*/}
                            </div>
                        )}
                    {type=== 'tv' && (
                            <div>
                            <h3 className="info">{datas.name}</h3>
                            <button className={'detailbtn'}>{first_air_date}</button>
                            </div>
                        )}

                    <h3 className={'detaildesc'}>{datas.overview}</h3>
                    {/*{genre}*/}
                    {datas.video &&
                    <iframe src={datas.video} title="W3Schools Free Online Web Tutorials">v</iframe>
                    }
                </div>
            </div>
           </div>
        );
    }
}

export default Detail;
