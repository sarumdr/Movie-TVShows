import React, {Component} from "react";
//import axios from "axios";
import ResultCard from "./ResultCard";
import {withRouter} from 'react-router-dom';

//let api_key = "ac0283efec6b8411d0ef6be46a722f8c";

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
        })
    }

    handleSubmit(type) {
        console.log("fun",type);

        
        this.props.history.push({
            pathname: '/resultcard',
            state: {
                query: this.state.query,
                type:type
            }
        })
    }

    render() {
        let type1=this.props.type;
         console.log(type1);
        return (
            <div className="container">
                <div className="input-wrapper">
                    <form className="form-inline d-flex justify-content-center md-form form-sm active-cyan-2 mt-2"
                          onSubmit={this.handleSubmit.bind(this,type1)}>
                        <input className="form-control form-control-sm mr-3 w-75"
                               type="text"
                               placeholder="Search"
                               aria-label="Search"
                               onChange={this.handleChange.bind(this)}/>
                    </form>

                </div>

            </div>
        );
    }
}

export default withRouter(Search);
