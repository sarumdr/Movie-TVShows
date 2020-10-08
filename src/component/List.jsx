import React, {Component} from "react";
import "../component/style.css";
//import Detail from "./Detail";
import Search from "./search";
import {withRouter} from "react-router-dom";
import NavBar from "./NavBar";

// import axios from "axios";

// const API_KEY = "ac0283efec6b8411d0ef6be46a722f8c";

class List extends Component {
    state = {
        data1: [],
        type: "",
        show: false,
    };

    handleClick(id, type) {
        console.log('clicked')
        console.log(id);
        console.log(type);
        this.setState({
            type: type
        })
        this.props.history.push({
            pathname: `/details/${id}`,
            state: {

                type: type
            }
        });
    }

    render() {
        console.log('propstype', this.props.type)
        console.log('statetype', this.state.type);
        let list = this.props.datas.map((data, index) => {
            let id = data.id;
            // console.log(data);
            return (

                <div key={data.id} className={'col-lg-2 col-md-3 col-sm-6 result' }>
                    <img
                        className="card-img-top image"
                        alt="..."
                        //onClick={this.fun.bind(this)}
                        onClick={this.handleClick.bind(this, id, this.props.type)}
                        src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                    />
                    {/*/!*{this.props.type==}*!/*/}
                    {/*<h3>{data.title}</h3>*/}
                </div>
            );
        });

        return (
            <div>
                <NavBar />
                <Search type={this.props.type}/>
                <div className={'row'}>
                    {list}
                </div>
            </div>
        );
    }
}

//export default List;
export default withRouter(List);
