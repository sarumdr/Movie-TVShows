import React, { Component } from 'react';
import axios from 'axios'
import List from './List';

//import List from './List';
let api_key="ac0283efec6b8411d0ef6be46a722f8c";

class Movie extends Component{
    state = {
        data:[],
        type:"movie",
        show:false
    };

    componentDidMount(){
        axios
            .get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`)
            .then((response) => {
                let data = response && response.data;
               console.log(data)
                this.setState({
                data:data.results,
                show:true
                });
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
//console.log(this.state.data);
    }
    
    

    render(){
      
        return(
            <div>
                <List 
                datas={this.state.data} 
                type={this.state.type}/>
                  </div>    
        )
    }
}

export default Movie